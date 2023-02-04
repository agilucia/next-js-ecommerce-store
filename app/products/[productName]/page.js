import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../../database/products';
import Product from './Product';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase().replace(' ', '-') === params.productName;
  });

  console.log(singleProduct);
  if (!singleProduct) {
    // throw new Error
    notFound();
  }

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        {/* This shoe is from the brand {singleProduct.name} and is great for indoor
        climbing */}
        <br />
        <Image
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
          alt={singleProduct.name}
          width="200"
          height="200"
        />
        {/* <p>🛒: {product.carts}</p> */}
        <Product product={singleProduct} />
      </main>
    </>
  );
}
