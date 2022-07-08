import { test, expect } from '@playwright/test';

test('overall integration test', async ({ page }) => {
    await page.goto('https://klausa.id');
    await page.type('Saya sedang makan.');
    await expect(page.locator('div.text-wrapper')).toHaveText('Saya (PRON)');
})
