import { expect, type Locator, type Page } from '@playwright/test';

export class LocatorPage {
  readonly page:Page
  readonly typeUsername: Locator;
  readonly typePassword: Locator;
  readonly clickSignIN: Locator;
  readonly clickAgreeTerms:Locator;
  constructor(page:Page)
  {
    this.page = page;
    this.typeUsername = page.locator("id=username");
    this.typePassword = page.locator("id=password");
    this.clickSignIN = page.locator("//button[contains(@class,'btn btn-white')]");
    this.clickAgreeTerms = page.locator("//button[contains(@class,'btn center-button')]");
  }
  private values = {
    userName:"Rabit",
    passWord:"Test@123"
  }
  async Login(){
    await this.typeUsername.fill(this.values.userName);
    await this.typePassword.fill(this.values.passWord);
    await this.clickSignIN.click();
    await this.clickAgreeTerms.click();
  } 
}