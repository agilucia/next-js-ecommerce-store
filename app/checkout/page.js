// import { cookies } from 'next/headers';
// import { Cart } from '../cart/page';
import { cookies } from 'next/headers';
// import Link from 'next/link';
import React from 'react';
import { getProducts } from '../../database/products';
import { MyForm } from './form';

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
    <>
      <h1>CHECKOUT</h1>
      <div>Total: {total}</div>
      <div>Please fill in personal information!</div>
      <main>
        <MyForm />
        {/* <form onSubmit="validateFormWithJs()">
          <label htmlFor="firstName">First name:</label>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="firstName"
            placeholder="first name"
            required
          />
          <br />
          <input
            data-test-id="checkout-last-name"
            id="lastName"
            name="lastName"
            placeholder="last name"
            required
          />
          <br />
          <input
            data-test-id="checkout-email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          <br />
          <input
            data-test-id="checkout-address"
            id="address"
            name="address"
            placeholder="address"
            required
          />
          <br />
          <input
            data-test-id="checkout-city"
            id="city"
            name="city"
            placeholder="city"
            required
          />
          <br />
          <input
            data-test-id="checkout-postal-code"
            id="postal code"
            name="postal code"
            placeholder="postal code"
            required
          />
          <br />
          <input
            data-test-id="checkout-country"
            id="country"
            name="country"
            placeholder="country"
            required
          />
          <br />
          <input
            data-test-id="checkout-credit-card"
            id="credit card"
            name="credit card"
            placeholder="credit card"
            required
          />
          <br />
          <input
            data-test-id="checkout-expiration-date"
            id="expiration date"
            name="expiration date"
            placeholder="expiration date"
            required
          />
          <br />
          <input
            data-test-id="checkout-security-code"
            id="security code"
            name="security code"
            placeholder="security code"
            required
          />
          <br />
          <Link href="/thankyou">
            <button data-test-id="checkout-confirm-order">Confirm order</button>
          </Link>
        </form> */}
      </main>
    </>
  );
}
