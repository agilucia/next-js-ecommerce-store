// import { cookies } from 'next/headers';
// import { Cart } from '../cart/page';
import { cookies } from 'next/headers';
// import Link from 'next/link';
import React from 'react';
import { getProducts } from '../../database/products';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
  description: 'This is my Checkout Page',
};

export default async function CheckoutPage() {
  const products = await getProducts();

  // get the cookie from the server
  const productsCookie = cookies().get('cart');

  // create a default value if cookie doesn't exist
  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithCarts = products.map((product) => {
    const productWithCarts = { ...product, amount: 0 };

    // I read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the product I update the amount of stars
    if (productInCookie) {
      productWithCarts.amount = productInCookie.amount;
    }

    return productWithCarts;
  });

  let total = 0;
  productsWithCarts.forEach((product) => {
    total += product.price * product.amount;
  });

  return (
    <main>
      <h1>CHECKOUT</h1>
      <div>Total: {total}</div>
      <div>Please fill in personal information!</div>

      <CheckoutForm />
    </main>
  );
}
