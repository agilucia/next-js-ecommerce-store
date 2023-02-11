'use client';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Product(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <input readOnly value={count} />
      <button
        onClick={() => {
          if (count <= 1) {
            setCount(1);
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        data-test-id="product-add-to-cart"
        onClick={() => {
          // get cookie
          const productsInCookies = getParsedCookie('productsCookie');
          // cookie doesn't exist, we initialize it with our useState-value
          if (!productsInCookies) {
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, carts: count },
            ]);

            return;
          }

          const foundProduct = productsInCookies.find((productInCookies) => {
            return productInCookies.id === props.product.id;
          });
          // product is inside the cookies
          if (foundProduct) {
            foundProduct.carts += count;
            // if it's not inside the cookie, we push it to the cookies
          } else {
            productsInCookies.push({
              id: props.product.id,
              carts: count,
            });
          }
          // update the cookies with the new values
          setStringifiedCookie('productsCookie', productsInCookies);
          setCount(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
