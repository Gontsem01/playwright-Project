import { test, expect } from '../src/fixtures/customFixtures';
import { validUsers } from '../src/data/testData';

test.describe('adminPanel Tests', () => {

    test('should navigate to adminPanel', async ({ loginPage, adminPanel }) => {
        // Login first
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.enterEmail(validUsers.admin.email);
        await loginPage.enterPassword(validUsers.admin.password);
        await loginPage.clickSubmitButton();
        
        // Navigate to admin panel
        await adminPanel.openAdminPanel();
        
        // Verify admin panel is loaded
        await expect(adminPanel.page).toHaveURL(/admin|dashboard/);
    });
});
