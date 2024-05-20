const { By, until } = require('selenium-webdriver');

class ProductPage {
    constructor(driver) {
        this.driver = driver;
        this.clickBasketButtonLocator = By.xpath("//*[@id='app']/div[6]/div/main/article/div[3]/div/div[2]/div[2]/ul/li[1]/div[1]/div[4]");
        this.clickFormButtonLocator = By.xpath("//a[@class='s-button s-button--fluid s-button--modern c-productAddPopup__successBtn']");
        this.clikLikeButtonLocal = By.xpath("//span[@class='favoriteProduct__text']");
        this.clikForPageLike = By.xpath("//div[@class='s-iconInformer__inner']");

        this.clickIconTelegram = By.xpath("//a[@class='s-breadcrumbs__itemLink']");
    }

    async addBasketButton() {
        console.log("нажать на кнопку корзины");
        const clickBasket = await this.driver.findElement(this.clickBasketButtonLocator);
        await clickBasket.click();
    }

    async clickButtonForm() {
        console.log("нажать на кнопку добавить заказ");
        const addform = await this.driver.findElement(this.clickFormButtonLocator);
        await addform.click();
    }

    async clikLikeButton (){
        console.log("нажатьна кнопку Like");
        const addform = await this.driver.findElement(this.clikLikeButtonLocal);
        await addform.click();
    }

    
    async clikLikePageButton (){
        console.log("нажатьна кнопку Like для страницы избранному");
        const addform = await this.driver.findElement(this.clikForPageLike);
        await addform.click();
    }


    async clickIconLinkButton() {
        console.log('Нажатие на ссылку на Link.');
        const geographyButton = await this.driver.findElement(this.clickIconTelegram);
        await geographyButton.click();
    }

}

module.exports = ProductPage;
