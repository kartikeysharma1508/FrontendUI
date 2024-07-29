import {test,expect,Browser,Page} from "@playwright/test";
import { chromium,firefox } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SearchProduct } from "../pages/searchProduct";

test.describe("Searching for product",()=>{
   
    let homePage:HomePage;
    let browser: Browser;
    let searchPage:SearchProduct;
    
    test.beforeAll(async()=>{
        browser = await firefox.launch({ headless: false });
        const page = await browser.newPage();
        homePage=new HomePage(page);
        searchPage = new SearchProduct(page);
        await homePage.gotoHomePage();
    })

    test.afterAll(async()=>{
        await browser.close();
    })

    //searching for the product in the amazon
    test('searching for product and selecting first product',async()=>{
        await searchPage.searchForProduct('laptop');
        await searchPage.selectFirstProduct();
    })

    
});