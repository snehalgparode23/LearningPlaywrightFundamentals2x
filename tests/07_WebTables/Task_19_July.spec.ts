//Task 01- Find Yoshi → Which Country?
/*import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    const country = await page
        .locator('#companies-table tr')
        .filter({ hasText: 'Yoshi Tannamuri' })
        .locator('[data-col="country"]')
        .innerText();

    console.log(`Country of Yoshi is ${country}`);
    await page.pause()


}); */

//Task 02- Task 2 - Dynamic Table Mia Hoffmann → Email ? 

import { test, expect, Page, Locator } from '@playwright/test';

async function findRowByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) return row;

        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error(`Row not found: ${name}`);
        await next.click();
    }
}

test('Verify Email for Mia Hoffmann', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email
    let name: string = "Mia Hoffmann";
    const row = await findRowByName(page, 'Mia Hoffmann');
    const email = await row.locator('td[data-col="email"]').innerText();

    console.log(`Email for ${name} is ${email}`);




});
