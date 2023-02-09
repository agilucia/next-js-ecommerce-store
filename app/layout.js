import './global.scss';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'bouldergear',
    template: '%s | bouldergear',
  },
};

export default function RootLayout({ children }) {
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
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/checkout">Checkout</Link>
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
