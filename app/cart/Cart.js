// 'use client';
// // import { products } from '../../database/products';
// import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

// export default function Cart(props) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           // get the cookie
//           const productsInCookies = getParsedCookie('cart');
//           const newCartList = productsInCookies.filter((productInCookies) => {
//             return productInCookies.id !== props.product.id;
//           });
//           if (newCartList) {
//             setStringifiedCookie('cart', productsInCookies);
//           }
//         }}

//         //   if (!productsInCookies) {
//         //     // if there is no cookie function stops here
//         //     return;
//         //   }

//         //   // try to find the product inside the cookies
//         //   const foundProduct = productsInCookies.filter((productInCookie) => {
//         //     return productInCookie.id !== props.product.id;
//         //   });

//         //   // my product is not inside of the cookie
//         //   if (foundProduct) {
//         //     // update the cookie with the new values
//         //     foundProduct.amount--;
//         //     //   // if there is a negative value set number to 0
//         //     //   if (foundProduct.amount < 0) {
//         //     //     foundProduct.amount = 0;
//         //     //   }
//         //     // update the cookie after transformation
//         //     setStringifiedCookie('cart', productsInCookies);
//         //   }
//         // }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// }
