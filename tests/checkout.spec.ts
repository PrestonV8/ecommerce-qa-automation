import {test, expect} from '@playwright/test';

test('Checkout test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('.title')).toHaveText('Products');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.inventory_item')).toHaveCount(0);

    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Erik');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Eisenhardt');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});