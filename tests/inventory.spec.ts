import { test, expect } from "@playwright/test";

test('Inventory test', async ({page}) => {
    // login into the application first
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // assert that we are on the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // assert the page header is visible
    await expect(page.locator('.title')).toHaveText('Products');

    // assert the product grid exists
    await expect(page.locator('.inventory_list')).toBeVisible();

    // assert at least one product loaded
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});