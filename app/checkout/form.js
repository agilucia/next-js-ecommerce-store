'use client';

// import Link from 'next/link';
import React from 'react';

export class MyForm extends React.Component {
  render() {
    // export default function MyForm() {
    return (
      <form>
        <label>
          First name:
          <input
            data-test-id="checkout-first-name"
            name="firstName"
            placeholder="first name"
            required
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            data-test-id="checkout-last-name"
            name="lastName"
            placeholder="last name"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            pattern="[a-z0-0._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            data-test-id="checkout-email"
            placeholder="email"
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            data-test-id="checkout-address"
            name="address"
            placeholder="address"
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            data-test-id="checkout-city"
            name="city"
            placeholder="city"
            required
          />
        </label>
        <br />
        <label>
          Postal code:
          <input
            data-test-id="checkout-postal-code"
            name="postal code"
            placeholder="postal code"
            required
          />
        </label>
        <br />
        <label>
          Country:
          <input
            data-test-id="checkout-country"
            name="country"
            placeholder="country"
            required
          />
        </label>
        <br />
        <label>
          Credit card:
          <input
            data-test-id="checkout-credit-card"
            name="credit card"
            placeholder="credit card"
            required
          />
        </label>
        <br />
        <label>
          Expiration date:
          <input
            data-test-id="checkout-expiration-date"
            name="expiration date"
            placeholder="expiration date"
            required
          />
        </label>
        <br />
        <label>
          Security code:
          <input
            data-test-id="checkout-security-code"
            name="security code"
            placeholder="security code"
            required
          />
        </label>
        {/* <Link href="/thankyou">
          <button
            data-test-id="checkout-confirm-order"
            type="submit"
            value="Submit"
          >
            Confirm order
          </button>
        </Link> */}
        {/* <Link href="/thankyou"> */}
        <button data-test-id="checkout-confirm-order" value="Confirm order">
          Confirm order
        </button>

        {/* </Link> */}
      </form>
    );
  }
}
