import {Given,When,Then} from "@cucumber/cucumber"
import {chromium,Page,Browser} from "@playwright/test"
import { LocatorPage } from "../POM/LoginPage";
import { Console } from "console";
let browser:Browser
let page : Page
         Given('User navigate to {string} using playwright', async function (string) {
           browser = await chromium.launch({headless:false});
           page = await browser.newPage();
           await page.goto(string);
         });
         When('User enter the username and password for the application using playwright', async function () {
            const loginPage = new LocatorPage(page);
            loginPage.Login();
            //await page.locator("id=username").fill("RABIT");
            //await page.locator("id=password").fill("Test@123");
            //await page.locator("//button[contains(@class,'btn btn-white')]").click();

          });
          Then('User should be able to apply for loan', async function () {
                
        });
        
