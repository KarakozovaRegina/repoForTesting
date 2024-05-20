const { By, until } = require('selenium-webdriver');

class LikePage {
    constructor(driver) {
        this.driver = driver;
        this.clickButtonLocator = By.xpath("//button[@class='s-productItem__favorite s-productItem__favorite--active']");
    
    }

    async clickDeleteLikeButton() {
        console.log("нажать на кнопку изображения на странице Избранное");
        const clickBasket = await this.driver.findElement(this.clickButtonLocator);
        await clickBasket.click();
    }

}

module.exports = LikePage;
