const { By, Key, until } = require('selenium-webdriver');

class WomenPage {
    constructor(driver) {
        this.driver = driver;
        this.clickProductLocator = By.xpath("//div[@class='b-catalogItem__brand'and text()='Kilian']");
        this.clickElementSort = By.xpath("//div[@class='select controls__select wide']");
        this.ChioceElementSort = By.xpath("//ul[@class='select__list']//li[text()='по размеру скидки']");
        this.filterElementButtunLocator = By.xpath("//button[@class='b-categoryToolbar__control b-categoryToolbar__controlSelect s-button s-button--basic s-button--filtering s-button--small' and text()='Бренд']");
        this.choicefilterElementLocator = By.xpath("//*[@id='catalog-filter']/div[1]/ul/li[1]/div/div[1]/div/ul/li[1]/label");
        this.clickFilterButtonLocator = By.xpath("//button[@class='toggler s-button s-button--primary']");
        this.clikLikeButtonLocator = By.xpath("//button[@class='products__favorites-btn products__favorites-btn--active']");
        this.clickIconTelegram = By.xpath("//a[@class='s-breadcrumbs__itemLink']");
    }
    
    async clickProductButton() {
        console.log('нажать на товар "KILIAN|Good Girl Gone Bad"');
        const productButton = await this.driver.findElement(this.clickProductLocator);
        await productButton.click();
    }

    async clickSortDiv() {
        console.log('нажать на элемент сортировки');
        const clickButton = await this.driver.findElement(this.clickElementSort);
        await clickButton.click();
    }

    async choiceSortElement() {
        console.log('выбран тип сортировки "по размеру скидки"');
        const clickButton = await this.driver.findElement(this.ChioceElementSort);
        await clickButton.click();
    }

    async clickButtonFilter() {
        console.log('выбран тип фильтра "Бренд"');
        const clickButton = await this.driver.findElement(this.filterElementButtunLocator);
        await clickButton.click();
    }

    async choiceElementFilter() {
        console.log('выбран тип элемента фильтра 1907"');
        const clickButton = await this.driver.findElement(this.choicefilterElementLocator);
        await clickButton.click();
    }

    async clickButtonchoiceFilter() {
        console.log('нажимаем на кнопку для фильтрации');
        const clicchoicekButton = await this.driver.findElement(this.clickFilterButtonLocator);
        await clicchoicekButton.click();
    }
    async clickIconLinkButton() {
        console.log('Нажатие на ссылку на Link.');
        const geographyButton = await this.driver.findElement(this.clickIconTelegram);
        await geographyButton.click();
    }

 
}

module.exports = WomenPage;
