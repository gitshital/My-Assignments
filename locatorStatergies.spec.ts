import {test} from '@playwright/test';
test('Saleforce login', async ({page}) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025');
    await page.locator('[id="Login"]').click();
    //await page.waitForTimeout(3000);
    await page.locator('.slds-truncate').nth(1).click();
    await page.waitForTimeout(5000);
})
