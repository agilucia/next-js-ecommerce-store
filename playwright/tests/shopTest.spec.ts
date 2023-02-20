import { expect, test } from '@playwright/test';

test('Add to cart, change quantity and remove from cart', async ({ page }) => {
  // go to website
  await page.goto('http://localhost:3000/');

  // go to products page
  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // choose first product
  await page.getByRole('link', { name: 'Scarpa' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // add some products to the cart
  await page
    .getByRole('button', { name: 'Add to cart' })
    .click({ clickCount: 3 });

  // check if product counts updates in header
  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('3');

  // go back to all products
  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // choose second product
  await page.getByRole('link', { name: 'La Sportiva' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  // add some products to the cart
  await page
    .getByRole('button', { name: 'Add to cart' })
    .click({ clickCount: 4 });

  // check if product counts updates in header
  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('7');

  // go to cart
  await expect(page.getByTestId('cart-link')).toBeVisible();
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // remove product
  await expect(page.getByTestId('cart-product-remove-1')).toBeVisible();
  await page.getByTestId('cart-product-remove-1').click();

  // check if product counts updates in header
  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('4');

  // go to checkout
  await expect(page.getByTestId('cart-checkout')).toBeVisible();
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
});
