'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Product(props) {
  return (
    <div>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productsCookie');

          if (!productsInCookies) {
            // if there is no cookie function stop here
            return;
          }

          // try to find the fruit inside of the cookies
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is not inside of the cookie
          if (foundProduct) {
            // update the cookie with the new values
            foundProduct.carts--;
            // if there is a negative value set number to 0
            if (foundProduct.carts < 0) {
              foundProduct.carts = 0;
            }
            // update the cookie after transformation
            setStringifiedCookie('productsCookie', productsInCookies);
          }
        }}
      >
        -🛒
      </button>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productsCookie');

          // if there is no cookie we initialize the value with a 1
          if (!productsInCookies) {
            // create the cookie with a new object for the fruit
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, carts: 1 },
            ]);
            // if there is no cookie function stop here
            return;
          }

          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundProduct
            foundProduct.carts++;
            // my product is not inside of the cookie
          } else {
            // Add the product to the array of products in cookies
            productsInCookies.push({ id: props.product.id, carst: 1 });
          }

          // update the cookie after transformation
          setStringifiedCookie('productsCookie', productsInCookies);
        }}
      >
        +🛒
      </button>
    </div>
  );
}
