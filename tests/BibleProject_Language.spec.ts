import { test, expect } from '@playwright/test';

test.describe('Bible Project Language Selection Tests', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://bibleproject.com/careers/');
    // Assert correct page
    await expect(page).toHaveURL(/careers/);
  });

  test('Verify English Careers page loads by default', async ({page}) => {
    await expect(page.locator('h1')).toHaveText('Careers at BibleProject');

    //Navigate to current openings
    await page.getByRole('link', { name: 'See Current Openings'}).click();

    // Add assertion to verify navigation to jobs page
    await expect(page).toHaveURL('https://bibleproject.applytojob.com/apply');

  });

  test('Change Language to Spanish and verify Careers Page', async ({page}) => {
    //Open language selection dropdown
    await page.getByRole('button', {name: 'Languages'}).click();

    // Asseret Spanish option is visible and select it
    await expect(page.getByRole('link', {name: 'Spanish Español'})).toBeVisible();

    await page.getByRole('link', {name: 'Spanish Español'}).click();

    await expect(page).toHaveURL('https://proyectobiblia.com/');
    
  });
});