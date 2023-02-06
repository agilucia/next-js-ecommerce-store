// import { cookies } from 'next/headers';
// import { Cart } from '../cart/page';

export default function Checkout() {
  return (
    <>
      <h1>CHECKOUT</h1>
      <div>Please fill in personal information!</div>
      <main>
        <form>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="firstName"
            placeholder="first name"
            required
          />
          <br />
          <input
            data-test-id="ceckout-last-name"
            id="lastName"
            name="lastName"
            placeholder="last name"
            required
          />
          <br />
          <input
            data-test-id="ceckout-email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          <br />
          <input
            data-test-id="ceckout-address"
            id="address"
            name="address"
            placeholder="address"
            required
          />
          <br />
          <input
            data-test-id="cechkout-city"
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
          <button data-test-id="checkout-confirm-order">Confirm order</button>
        </form>
      </main>
    </>
  );
}
