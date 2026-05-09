import { test } from '@playwright/test'

test('Create Lead', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    //Xpath Locators
    await page.locator('//input[@id="username"]').fill('democsr2');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click(); // CLick on CRM/SFA hyperlink with xpath
    await page.locator('//a[text()="Leads"]').click();//Click on Lead with xpath
    await page.waitForTimeout(3000);
    await page.locator('//a[text()="Create Lead"]').click();
    await page.waitForTimeout(3000);
   // Fill Form
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('TestLeaf');
    await page.waitForTimeout(3000);
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Shital');
    await page.waitForTimeout(3000);
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('C');
    await page.waitForTimeout(3000);
    await page.locator('//input[@name="submitButton"]').click();
    await page.waitForTimeout(3000);
 });
// test('Craete Lead with CSS seletor', async ({ page }) => {
//     await page.goto('https://leaftaps.com/opentaps/control/main');
//     //CSS Locator
//     // await page.locator('[id="username"]').fill('democsr2');
//     // await page.locator('[id="password"]').fill('crmsfa');
//     // await page.locator('[class="decorativeSubmit"]').click();
//     await page.locator('#username').fill('democsr2');
//     await page.locator('#password').fill('crmsfa');
//     await page.locator('.decorativeSubmit').click();
//     await page.locator('#label>a').click();  //CLick on CRM/SFA hyperlink with css
//     await page.locator('.x-panel-header>a').nth(1).click();// Click on Lead with css
//     await page.locator('.shortcuts>li>a').nth(1).click();
//     await page.locator('#createLeadForm_companyName').fill('TestLeaf Platform');
//     await page.locator('#createLeadForm_firstName').fill('Tom');
//     await page.locator('#createLeadForm_parentPartyId').fill('123');
//     await page.locator('#createLeadForm_lastName').fill('Cruise');
//     await page.locator('#createLeadForm_firstNameLocal').fill('Tomy');
//     await page.locator('#createLeadForm_lastNameLocal').fill('K');
//     await page.locator('#createLeadForm_personalTitle').fill('Mr');
//     await page.locator('#createLeadForm_generalProfTitle').fill('Actor');
//     await page.locator('#createLeadForm_departmentName').fill('Film');
//     await page.locator('#createLeadForm_annualRevenue').fill('');
//     await page.locator('#createLeadForm_numberEmployees').fill('200');
//     await page.locator('#createLeadForm_sicCode').fill('123456');
//     await page.locator('#createLeadForm_description').fill('12qwe344rhfvejt3tvgvgvvgv5');
//     await page.locator('#createLeadForm_tickerSymbol').fill('!###');
//     await page.locator('[name="submitButton"]').click();
//     await page.waitForTimeout(5000);
//     })