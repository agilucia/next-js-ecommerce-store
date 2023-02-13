import '../global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import DeleteProductButton from './DeleteProductButton';
import styles from './page.modules.scss';

export const metadata = {
  title: 'Cart',
  description: 'This is my Cart Page',
};

export default async function CartPage() {
  const products = await getProducts();

  // get the cookie from the server
  const productsCookie = cookies().get('cart');

  // create a default value if cookie doesn't exist
  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithCarts = products.map((product) => {
    const productWithCarts = { ...product, amount: 0 };

    // I read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the product I update the amount of stars
    if (productInCookie) {
      productWithCarts.amount = productInCookie.amount;
    }

    return productWithCarts;
  });

  let total = 0;
  productsWithCarts.forEach((product) => {
    total += product.price * product.amount;
  });

  const cartItems = productsWithCarts.filter((product) => product.amount > 0);

  return (
    <main>
      <div>
        <h1>CART</h1>
      </div>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id} data-test-id={`cart-product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <Image
                src={`/images/${product.id}.jpg`}
                alt={product.name}
                width="200"
                height="200"
              />
              <div>
                <b>{product.name}</b> {product.price} €
                <br />
                <div data-test-id={`cart-product-quantity-${product.id}`}>
                  <b>Amount:</b> {product.amount}
                </div>
              </div>
            </Link>
            <DeleteProductButton product={product} />
          </li>
        ))}
      </ul>
      <p>
        <span>
          <div data-test-id="cart-total">
            <b>Total:</b> {total} €
          </div>
          <br />
          <Link href="/checkout">
            <button data-test-id="cart-checkout">Checkout</button>
          </Link>
        </span>
      </p>
    </main>
  );
}
