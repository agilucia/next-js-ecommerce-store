import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../database/products';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'bouldergear',
    template: '%s | bouldergear',
  },
};

export default async function RootLayout({ children }) {
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

  let totalQuantity = 0;
  productsWithCarts.forEach((product) => {
    totalQuantity += product.amount;
  });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.body}>
        <CookieBanner />
        <header className={styles.header}>
          <nav>
            <div>
              {/* <div className={styles.div_bouldergear}>bouldergear</div> */}
              <div className={styles.div_links}>
                <Link href="/">Home</Link>
                <Link href="/products" data-test-id="products-links">
                  Products
                </Link>
                <Link href="/cart" data-test-id="cart-link">
                  Cart: <div data-test-id="cart-count">{totalQuantity}</div>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          copyright climbinggear4everyone 2023
        </footer>
      </body>
    </html>
  );
}
