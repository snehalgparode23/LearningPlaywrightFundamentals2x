import {test, expect} from '@playwright/test';

test('Verify To and From of SpiceJet Airlines', async ({page}) => {
    // 1. Go to https://www.spicejet.com/
    await page.goto('https://www.spicejet.com/');  
    await page.pause();
    // 2. Select From and To
    await page.getByTestId("to-testID-origin").click();
    await page.locator('[data-testid="to-testID-origin"] input').fill('Del');
    await page.getByText('Delhi', { exact: true }).click();
    await page.getByTestId("to-testID-destination").click();
    await page.locator('[data-testid="to-testID-destination"] input').fill('Pu');
    await page.getByText('Pune', { exact: true }).click();
    await page.pause();

});




