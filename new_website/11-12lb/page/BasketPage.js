const { By, Key, until } = require("selenium-webdriver");

class BasketPage {
  constructor(driver) {
    this.driver = driver;
    this.findButton = By.xpath("//div[@class='s-controlItem s-controlItem--unbordered b-n-checkoutProductCard__removeButton']");
    this.deleteElementButtonLocator = By.xpath("//span[@class='s-controlItem__text']");
    this.deleteclickbutton = By.xpath("//button[@class ='s-button s-button--outline s-button--secondary s-button--fluid b-n-checkout__button b-n-checkoutDeleteItemPopup__button']");
  }

  async isProductInBasket() {
    try {
      // Находим элемент на странице
      const productElement = await this.driver.findElement(
        By.xpath("//div[@class='b-n-checkoutBasket__products']")
      );

      // Если элемент найден, возвращаем true
      return true;
    } catch (error) {
      // Если элемент не найден, возвращаем false
      return false;
    }
  }

  async clickDeleteButton() {
    console.log("Нажать на кнопку удаления товара из корзины");
    const deleteButton = await this.driver.findElement(this.findButton);
    
    // Perform hover action on the element
    const actions = this.driver.actions({ bridge: true });
    await actions.move({ origin: deleteButton }).perform();
  
    // Wait for the "Удалить" button to become visible
    await this.driver.wait(until.elementLocated(this.deleteElementButtonLocator));
  
    // Click on the "Удалить" button
    const deleteElementButton = await this.driver.findElement(this.deleteElementButtonLocator);
    await deleteElementButton.click();
  }


  async clickButtonForDelete() {
    console.log("Нажать на кнопку удаления товара из корзины");
    const deleteButton = await this.driver.findElement(this.deleteclickbutton);
    await deleteButton.click();
  }
}

module.exports = BasketPage;