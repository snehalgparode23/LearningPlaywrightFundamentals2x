//Navigate to the https://www.flipkart.com/search
//Search for the “macmini”
//Print the titles of all the results.
//Find the cheapest price mac mini and print it. (on first page)

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'
test.describe('Flipkart Search via the SVG for "macmini"', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
        await page.locator('input[name="q"]').fill("macmini");
    
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        const productlocator: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");
        let countnumber: number = await productlocator.count();
        const numberprice: number[] = [];
        for (let i = 0; i < countnumber; i++) {
        const priceofeachitem: string | null = await productlocator.nth(i).textContent();
        if (priceofeachitem === "Price: Not Available") {
            continue;
        }
        if (priceofeachitem) {
            const cleaned = priceofeachitem.replace(/[₹,]/g, '').trim();
            console.log(cleaned);
            const num = parseInt(cleaned, 10);
            if (!isNaN(num)) {
                numberprice.push(num);
            }
        }

    }
    //sort ascending
    numberprice.sort((a, b) => a - b);
    console.log("Lowest price:", numberprice[0]);
    await page.pause();
});




})

        