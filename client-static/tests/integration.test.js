const { test, expect } = require('@playwright/test');

test('overall integration test', async ({ page }) => {
    await page.goto('https://klausa.id');
    await page.type('textarea', 'Saya sedang makan.');
    await expect(page.locator('div.text-wrapper.MuiBox-root')).toHaveText('Saya (PRON)', {
        timeout: 60000
    });
})
