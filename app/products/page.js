import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
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
      </main>
    </>
  );
}
