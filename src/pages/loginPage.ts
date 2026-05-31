import {Page,Locator} from '@playwright/test';
import BasePage from './BasePage';
import { pageUrls } from '../data/testData';

export class LoginPage extends BasePage{
    
    get openLoginButton(): Locator {
        return this.page.getByRole('button',{ name: 'Login' });
    }
    get emailInput(): Locator {
        return this.page.getByRole('textbox',{ name: 'Email' });
    }   
    get passwordInput(): Locator {
        return this.page.getByRole('textbox',{ name: 'Password' });
    }
    get submitButton(): Locator {
        return this.page.getByRole('button',{ name: 'Login' });   
    } 
        
        async goto() {
            await this.navigateTo(pageUrls.loginPage);
        }

        async clickLoginButton() {
            await this.clickElement(this.openLoginButton);
        }

        async enterEmail (email: string) {
            await this.fillInput(this.emailInput, email);
        }

        async enterPassword(password: string) {
            await this.fillInput(this.passwordInput, password);
        }

        async clickSubmitButton() {
            await this.clickElement(this.submitButton);
        }
    
    };

    


