import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function ProductsPage() {
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

  return (
    <>
      <h1>PRODUCTS</h1>
      <div>
        {productsWithCarts.map((product) => {
          return (
            <div key={product.id}>
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
                data-test-id="product-<product id>"
              >
                <h2>{product.name}</h2>
              </Link>
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
                data-test-id="product-<product id>"
              >
                <Image
                  src={`/images/${product.name}-${product.id}.jpg`}
                  alt={product.name}
                  width="200"
                  height="200"
                />
              </Link>
              <p>🛒: {product.carts}</p>
            </div>
          );
        })}
      </div>
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
