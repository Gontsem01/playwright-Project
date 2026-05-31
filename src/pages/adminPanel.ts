import {Page,Locator} from '@playwright/test';
import BasePage from './BasePage';    

export class AdminPanel extends BasePage {
    
    get menuButton(): Locator {
        return this.page.getByRole('button', { name: 'menu' });
    }

    get adminPanelButton(): Locator {
        return this.page.getByRole('button', { name: 'Admin Panel' });
    }

    async clickMenuButton() {
        await this.clickElement(this.menuButton);
    }

    async clickAdminPanelButton() {
        await this.clickElement(this.adminPanelButton);
    }

    async openAdminPanel() {
        await this.clickMenuButton();
        await this.clickAdminPanelButton();
    }

    verifyAdminPanelPage() {
        return this.page.url().includes('/Admin Dashboard');
    }
}
