import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct, products } from '../../../database/products';
import Product from './Product';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props) {
  const singleProduct = await getProduct(props.params.productId);

  return {
    title: `Single product page for ${singleProduct.name}`,
    description: '',
  };
}

export default async function ProductPage({ params }) {
  // const singleProduct = products.find((product) => {
  //   return product.id === params.productId;
  // });

  const singleProduct = await getProduct(params.productId);

  console.log(params);

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
          src={`/images/${singleProduct.id}.jpg`}
          alt={singleProduct.id}
          width="200"
          height="200"
        />
        <p>🛒: {singleProduct.carts}</p>
        <Product product={singleProduct} />
        <button data-test-id="product-add-to-cart">Add to cart</button>
      </main>
    </>
  );
}
