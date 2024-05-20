const { By, Key, until } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.clickCatalogLocator = By.xpath("//a[@class='s-mainMenu__link']//span[text()='Парфюмерия']");
        this.clickWomenLocator = By.xpath("//a[@class='s-subnav__link s-subnav__listItemLink s-subnav__listItemLink--highlighted']//span[text()='Женская']");
        this.searchInputLocator = By.xpath("//input[@class = 's-input s-searchForm__field digi-instant-search jc-ignore']");
        this.searchButtonLocator = By.xpath("//button[@class = 's-button s-button--primary s-searchForm__submit']");
        this.inputEmailLocator = By.xpath("//input[@class ='s-input s-subscriptionPromo__email']");
        this.inputEmailButtonLocator = By.xpath("//button[@class ='s-subscriptionPromo__buttons']");
       
    }
    
    async waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    async clickMenuButton() {
        console.log('нажатие на ссылку "Парфюмерия"');
        const catalogButton = await this.driver.findElement(this.clickCatalogLocator);
        await catalogButton.click();
    }
    async clickWomenButton() {
        console.log('нажатие на ссылку "Женская"');
        const womenButton = await this.driver.findElement(this.clickWomenLocator);
        await womenButton.click();
    }

    async clickSeachButton() {
        console.log('Нажатие на кнопку ввода поиска.');
        const geographyButton = await this.driver.findElement(this.searchButtonLocator);
        await geographyButton.click();
    }

    async inputSeach(input) {
        console.log('Ввод значения: ' + input);
        const geographyInput = await this.driver.findElement(this.searchInputLocator);
        await geographyInput.clear();
        await geographyInput.sendKeys(input);
        await geographyInput.sendKeys(Key.ENTER);
    }

    async isProductInPage() {
        try {
          // Находим элемент на странице
          const productElement = await this.driver.findElement(
            By.xpath("//*[@id='digi-shield']/div[3]/div[2]/div/div/div[2]/div[2]/div/div[1]/a[2]/div[1]/span[1]")
          );
    
          // Если элемент найден, возвращаем true
          return true;
        } catch (error) {
          // Если элемент не найден, возвращаем false
          return false;
        }
      }

      async clickEmailButton() {
        console.log('Нажатие на кнопку ввода email.');
        const geographyButton = await this.driver.findElement(this.inputEmailButtonLocator);
        await geographyButton.click();
    }

    async inputEmail(input) {
        console.log('Ввод значения: ' + input);
        const geographyInput = await this.driver.findElement(this.inputEmailLocator);
        await geographyInput.clear();
        await geographyInput.sendKeys(input);
        await geographyInput.sendKeys(Key.ENTER);
    }

    
    async clickYouTubeButton() {
      console.log('Нажатие на кнопку YouTube');
      const geographyButton = await this.driver.findElement(this.clickYouTubeLocal);
      await geographyButton.click();
  }

  async clickIconLinkButton() {
    console.log('Нажатие на ссылку на Link.');
    const geographyButton = await this.driver.findElement(this.clickIconTelegram);
    await geographyButton.click();
}
}

module.exports = HomePage;
