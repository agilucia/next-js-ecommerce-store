import '../global.scss';
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

  return (
    <main className={styles.products_overview}>
      <div>
        <h1 className={styles.h1}>PRODUCTS</h1>
      </div>
      <span className={styles.span}>
        {products.map((product) => {
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
              </Link>
            </div>
          );
        })}
      </span>
    </main>
  );
}
