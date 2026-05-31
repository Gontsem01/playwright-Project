import { test, expect } from '../src/fixtures/customFixtures';
import { validUsers } from '../src/data/testData';

test.describe('Login Tests', () => {

    test('should login successfully with valid credentials', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.enterEmail(validUsers.admin.email);
        await loginPage.enterPassword(validUsers.admin.password);
        await loginPage.clickSubmitButton();
    });
});
