import '../global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Cart',
  description: 'This is my Cart Page',
};

export default async function cartPage() {
  const products = await getProducts();

  // get the cookie from the server
  const productsCookie = cookies().get('productsCookie');

  // create a default value if cookie doesn't exist
  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithCarts = products.map((product) => {
    const productWithCarts = { ...product, carts: 0 };

    // I read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the product I update the amount of stars
    if (productInCookie) {
      productWithCarts.carts = productInCookie.carts;
    }

    return productWithCarts;
  });

  let total = 0;
  productsWithCarts.forEach((product) => {
    total += product.price * product.carts;
  });

  const cartItems = productsWithCarts.filter((product) => product.carts > 0);

  return (
    <main>
      <div>
        <h1>CART</h1>
      </div>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id} data-test-id={`cart-product-${product.id}`}>
            <Image
              src={`/images/${product.id}.jpg`}
              alt={product.name}
              width="200"
              height="200"
            />
            <b>{product.name}</b> {product.price} €
            <div data-test-id={`cart-product-quantity-${product.id}`}>
              {product.carts}x {product.name}
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {total} €</p>
    </main>
  );
}
