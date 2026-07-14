import { test, expect } from "@playwright/test";

test("two different contexts", async ({ browser }) => {
    let Context1 = await browser.newContext();
    let Page1 = await Context1.newPage();
    await Page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");

    let Context2 = await browser.newContext();
    let Page2 = await Context2.newPage();
    await Page2.goto("https://onlinebanking.tdbank.com/");

    console.log("First URL:", Page1.url());
    console.log("Second URL:", Page2.url());
    await Context1.close();
    await Context2.close();

});