import { Page,Locator } from "@playwright/test";

export class LoginPage{
    page: Page;
    usernameTextbox:Locator;
    passwordTextbox:Locator;
    loginButton:Locator;

    
    constructor(page:Page){
        this.page=page;
        this.usernameTextbox=page.getByLabel('Username')
        this.passwordTextbox=page.getByLabel('Password')
        this.loginButton=page.getByRole('button',{name:'Login'});
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username: string,password: string){
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}