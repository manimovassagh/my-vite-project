import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  console.log("This is running fast baby");
  
  expect(title).toBe('Example Domain');
});