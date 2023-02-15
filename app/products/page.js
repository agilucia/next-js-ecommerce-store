import '../global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description:
    'Browse through the Products Page and choose what your heart desires',
};

export default async function ProductsPage() {
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

  return (
    <>
      <main className={styles.products_overview}>
        <div>
          <h1 className={styles.h1}>PRODUCTS</h1>
        </div>
        <span className={styles.span}>
          {productsWithCarts.map((product) => {
            return (
              <div className={styles.div} key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id="product-<product id>"
                >
                  <Image
                    src={`/images/${product.id}.jpg`}
                    alt={product.name}
                    width="200"
                    height="200"
                  />

                  <h3 className={styles.h3}>{product.name}</h3>
                  <p className={styles.p}>{product.price}€</p>
                  {/* <p>🛒: {product.amount}</p> */}
                </Link>
              </div>
            );
          })}
        </span>
      </main>
      {/* <h1>Products</h1>
      <main>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                <h2>{product.name}</h2>
              </Link>
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                <Image
                  src={`/images/${product.name}-${product.id}.jpg`}
                  alt={product.name}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main> */}
    </>
  );
}
