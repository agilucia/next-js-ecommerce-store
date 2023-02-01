import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/shoes">Climbing shoes</Link>
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
