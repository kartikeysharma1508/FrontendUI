import { test, expect,Page, Browser } from '@playwright/test';
import { firefox } from '@playwright/test';
import {LoginPage} from '../pages/login';

test.describe('Login tests',()=>{
    let loginPage:LoginPage;
    let browser:Browser;

    test.beforeEach(async ()=>{
        browser = await firefox.launch({ headless: false });
        const page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();

    });
    test.afterEach(async () => {
        await browser.close();
    });

    test('logining with credentials',async()=>{
        await loginPage.login("tomsmith","SuperSecretPassword!")
    });
});
