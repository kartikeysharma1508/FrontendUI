import { Page,Locator } from "playwright/test";

export class SearchProduct{
    page:Page;
    searchBar:Locator;
    firstProduct:Locator;
    searchButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.searchBar=page.locator('#twotabsearchtextbox');
        this.searchButton=page.locator('#nav-search-submit-button');
        this.firstProduct = page.locator('.s-search-results .s-result-item').first();

    }


    //searching for the product in the amazon 
    async searchForProduct(product:string){
        await this.searchBar.fill(product);
        await this.searchButton.click();
    }

    //selecting the first product from the list
    async selectFirstProduct(){
        await this.firstProduct.click();
        await this.page.waitForTimeout(5000);
    }
    
}