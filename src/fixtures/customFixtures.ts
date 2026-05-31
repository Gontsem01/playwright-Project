import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'; 
import { AdminPanel } from '../pages/adminPanel';

type customFixtures = {
    loginPage: LoginPage;
    adminPanel: AdminPanel;
};

export const test = base.extend<customFixtures>({
    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);  
        await use(login);
    },

    adminPanel: async ({ page }, use) => {
        const admin = new AdminPanel(page);  
        await use(admin);
    },

}); 

export { expect } from '@playwright/test';
