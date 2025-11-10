import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  test('Positive Test - Successful login with valid credentials', async ({ page }) => {
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();

    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('You logged into a secure area!');
  });

});
