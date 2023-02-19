import { expect, test } from '@playwright/test';

test('test checkout flow, payment and thank you page', async ({ page }) => {
  // got to checkout page
  await page.goto('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('[data-test-id="checkout-first-name"]').fill('Katja');
  await page.locator('[data-test-id="checkout-first-name"]').press('Tab');
  await page.locator('[data-test-id="checkout-last-name"]').fill('Sabando');
  await page.locator('[data-test-id="checkout-last-name"]').press('Tab');
  await page.locator('[data-test-id="checkout-email"]').fill('katja@gmail.com');
  await page.locator('[data-test-id="checkout-email"]').press('Tab');
  await page
    .locator('[data-test-id="checkout-address"]')
    .fill('Sunny Street 7');
  await page.locator('[data-test-id="checkout-address"]').press('Tab');
  await page.locator('[data-test-id="checkout-city"]').fill('Funchal');
  await page.locator('[data-test-id="checkout-city"]').press('Tab');
  await page.locator('[data-test-id="checkout-postal-code"]').fill('4785');
  await page.locator('[data-test-id="checkout-postal-code"]').press('Tab');
  await page.locator('[data-test-id="checkout-country"]').fill('Portugal');
  await page.locator('[data-test-id="checkout-credit-card"]').click();
  await page
    .locator('[data-test-id="checkout-credit-card"]')
    .fill('123545676345');
  await page.locator('[data-test-id="checkout-expiration-date"]').click();
  await page.locator('[data-test-id="checkout-expiration-date"]').press('Tab');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page
    .locator('[data-test-id="checkout-expiration-date"]')
    .fill('2030-01');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('[data-test-id="checkout-security-code"]').click();
  await page.locator('[data-test-id="checkout-security-code"]').fill('123');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
  await page.getByText('Thank you for your order!');
});
