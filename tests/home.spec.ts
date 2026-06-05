import { test, expect } from '@playwright/test';

const homeUrl = 'http://127.0.0.1:3001';

test('homepage loads and displays correctly', async ({ page }) => {
  const response = await page.goto(homeUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });

  expect(response?.ok(), 'Dev server should return the homepage').toBeTruthy();
  await expect(page).toHaveTitle(/Stravotech/);
  await expect(page.getByRole('heading', { name: /The Sharpest Free/i })).toBeVisible();

  await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
});

test('homepage avoids horizontal overflow on desktop and mobile', async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto(homeUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `${viewport.width}px viewport should not have horizontal overflow`).toBeLessThanOrEqual(1);
  }
});
