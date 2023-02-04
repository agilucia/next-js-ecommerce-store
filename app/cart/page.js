// import Image from 'next/image';
// import Link from 'next/link';
import { products } from '../../database/products';
import Product from '../products/[productName]/Product';

// import ProductsPage from '../products/page.js';

export default function CartPage() {
  return (
    <>
      <h1>CART</h1>
      <main>
        <p>This is the cart.</p>
        <Product product={products} />
        {/* <ProductsPage /> */}
      </main>
    </>
  );
}
