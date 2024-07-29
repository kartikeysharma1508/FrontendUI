import { Page,Locator } from "@playwright/test";

export class HomePage{

    page: Page;

    constructor(page:Page){
        this.page=page;
    }

    async gotoHomePage(){
        await this.page.goto("https://www.amazon.in/");
    }
} 