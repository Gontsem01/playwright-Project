import {Page,Locator, expect} from '@playwright/test';

export default class BasePage{
   protected readonly page: Page
    constructor(page: Page){
        this.page = page
    }     

    async navigateTo(url: string) {
        console.log(`Navigating to ${url}`);
        await this.page.goto(url);
    }

    async clickElement(locator: Locator) {
        console.log(`Clicking on element: ${locator}`);
        await locator.click();
    }

    async fillInput(locator: Locator, value: string) {
        console.log(`Filling input: ${locator} with value: ${value}`);
        await locator.fill(value);
    }

    async verifyElementVisible(locator: Locator) {
        console.log(`Verifying element is visible: ${locator}`);
        await expect(locator).toBeVisible();
    }

}