//  import Image from 'next/image';
//  import Link from 'next/link';
import { products } from '../../database/products';
import Product from '../products/[productName]/Product';

// import ProductsPage from '../products/page';

// import ProductsPage from '../products/page.js';
export const dynamic = 'force-dynamic';

export default function CartPage({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productName;
  });

  return (
    <>
      <h1>CART</h1>
      <main>
        <p>This is the cart.</p>
        <Product product={singleProduct} />
        {/* <ProductsPage /> */}
      </main>
    </>
  );
}
