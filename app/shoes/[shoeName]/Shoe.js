// 'use client';

// import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// export default function Shoe(props) {
//   return (
//     <div>
//       <h2>{props.shoe.name}</h2>
//       <p>{props.shoe.icon}</p>
//       <button
//         onClick={() => {
//           // get the cookie
//           const shoesInCarts = getParsedCookie('cart');

//           if (!shoesInCarts) {
//             // if there is no cookie function stop here
//             return;
//           }

//           // try to find the fruit inside of the cookies
//           const foundShoe = shoesInCarts.find((shoeInCart) => {
//             return shoeInCart.id === props.shoe.id;
//           });

//           // my shoe is not inside of the cookie
//           if (foundShoe) {
//             // update the cookie with the new values
//             foundShoe.icons--;
//             // if there is a negative value set number to 0
//             if (foundShoe.stars < 0) {
//               foundShoe.icons = 0;
//             }
//             // update the cookie after transformation
//             setStringifiedCookie('cart', shoesInCarts);
//           }
//         }}
//       >
//         - 🛒
//       </button>
//       <button
//         onClick={() => {
//           // get the cookie
//           const shoesInCarts = getParsedCookie('cart');

//           // if there is no cookie we initialize the value with a 1
//           if (!cart) {
//             // create the cookie with a new object for the shoe
//             setStringifiedCookie('cart', [{ id: props.shoe.id, icons: 1 }]);
//             // if there is no cookie function stop here
//             return;
//           }

//           const foundShoe = shoesInCarts.find((shoeInCart) => {
//             return shoeInCart.id === props.shoe.id;
//           });

//           // my shoe is inside of the cookie
//           if (foundShoe) {
//             // Add a start to the foundShoe
//             foundShoe.stars++;
//             // my shoe is not inside of the cookie
//           } else {
//             // Add the shoe to the array of shoes in carts
//             shoesInCarts.push({ id: props.shoe.id, icons: 1 });
//           }

//           // Update the cookie after transformation
//           setStringifiedCookie('cart', shoesInCarts);
//         }}
//       >
//         +🛒
//       </button>
//     </div>
//   );
// }
