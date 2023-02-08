// import ProductsPage from '../products/page';
// import { cookies } from 'next/headers';
//  import Image from 'next/image';
//  import Link from 'next/link';

// LINE BREAK HERE!!!

// import { products } from '../../database/products';
// import Product from '../products/[productName]/Product';

// export const dynamic = 'force-dynamic';

// export default function CartPage({ params }) {
//   const singleProduct = products.find((product) => {
//     return product.name.toLowerCase() === params.productName;
//   });

//   return (
//     <>
//       <h1>CART</h1>
//       <main>
//         <p>This is the cart.</p>
//         <Product product={singleProduct} />
//         {/* <p>🛒: {product.carts}</p> */}
//         {/* <ProductsPage /> */}
//       </main>
//     </>
//   );
// }

// LINE BREAK HERE!!!

// import { cookies } from 'next/headers';
// // import Image from 'next/image';
// // import Link from 'next/link';
// import { products } from '../../database/products';

// export default function Cart() {
//   // get the cookie from the server
//   const productsCookie = cookies().get('productsCookie');

//   // create a default value if cookie doesn't exist
//   let productsCookieParsed = [];

//   if (productsCookie) {
//     productsCookieParsed = JSON.parse(productsCookie.value);
//   }

//   const productsWithAmount = products.map((product) => {
//     const productWithAmount = { ...product, amount: 0 };

//     // i read the cookie and find the amount
//     const productInCookie = productsCookieParsed.find(
//       (productObject) => product.id === productObject.id,
//     );

//     // i find the product and update the amount
//     if (productInCookie) {
//       productWithAmount.amount = productInCookie.amount;
//     }

//     return productWithAmount;
//   });

//   // add subtotal to array of products
//   const productsWithSubtotal = productsWithAmount.map((productWithAmount) => {
//     const productWithSubtotal = {
//       ...productWithAmount,
//       subtotal: productWithAmount.price * productWithAmount.amount,
//     };

//     return productWithSubtotal;
//   });

//   console.log('productsWithSubtotal', productsWithSubtotal);

//   const totalAmount = productsWithAmount.reduce((prevVal, currentVal) => {
//     return prevVal + currentVal.amount;
//   }, 0);
//   console.log('totalAmount', totalAmount);

//   const totaltotal = productsWithSubtotal.reduce((prevVal, currentVal) => {
//     return prevVal + currentVal.subtotal;
//   }, 0);
//   console.log('totaltotal', totaltotal);

//   return (
//     <div>
//       <h1>Cart</h1>
//       {productsWithSubtotal.map((product) => {
//         return (
//           <div key={product.id}>
//             <span> {product.name}</span>
//             <span> price per product: {product.price},- €</span>
//             <div> amount: {product.amount}</div>

//             <div>Subtotal {product.subtotal},- €</div>
//             <br />
//           </div>
//         );
//       })}
//       <div>Total amount: {totalAmount} Products</div>
//       {console.log(typeof totalAmount)}
//       <h2>TOTAL PRICE: {totaltotal},- €</h2>
//     </div>
//   );
// }
