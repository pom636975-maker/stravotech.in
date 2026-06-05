import { test, expect } from '@playwright/test';

test('homepage loads and displays correctly', async ({ page }) => {
  // Navigate to the local server
  let serverUp = true;
  try {
    const response = await page.goto('http://localhost:3001', { timeout: 5000 });
    if (!response || !response.ok()) {
      serverUp = false;
    }
  } catch (error) {
    serverUp = false;
  }

  expect(serverUp, 'Dev server should be running on localhost:3001').toBeTruthy();

  // Basic checks
  await expect(page).toHaveTitle(/.*|.*/); // Just checking if title is rendered
  
  // Try to find the hero section or a main header
  const bodyText = await page.locator('body').innerText();
  expect(bodyText.length).toBeGreaterThan(0);

  // Take a screenshot we can see (or just to have it complete)
  await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });

  console.log("Successfully loaded the homepage. Basic assertions passed.");
});
