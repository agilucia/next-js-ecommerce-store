import '../../global.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import AddProduct from './AddProduct';
import { ProductNotFoundMetadata } from './not-found';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata(props: Props) {
  const singleProduct = await getProduct(parseInt(props.params.productId));

  if (!singleProduct) {
    return ProductNotFoundMetadata;
  }

  return {
    title: singleProduct.name,
    description: `Add ${singleProduct.name} to your inventory to step up your bouldering game`,
  };
}

export default async function ProductPage(props: Props) {
  // const singleProduct = products.find((product) => {
  //   return product.id === params.productId;
  // });

  const singleProduct = await getProduct(parseInt(props.params.productId));

  // console.log(params);

  // console.log(singleProduct);
  if (!singleProduct) {
    // throw new Error
    notFound();
  }

  return (
    <main>
      <span className={styles.span}>
        <Image
          data-test-id="product-image"
          src={`/images/${singleProduct.id}.jpg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
        <div className={styles.product_info}>
          <h1>{singleProduct.name}</h1>
          <br />
          <p>{singleProduct.description}</p>
          <div>
            <div data-test-id="product-price">
              Price: {singleProduct.price} €
            </div>
            <AddProduct product={singleProduct} />
          </div>
        </div>
      </span>
    </main>
  );
}
