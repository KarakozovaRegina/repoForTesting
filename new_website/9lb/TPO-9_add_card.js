const { Builder, By, Key, until } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const setupDriver = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  return driver;
};

const executeTest = async (driver) => {
  try {
    await driver.get("https://randewoo.ru/");
    await sleep(3000);

    // нажатие на ссылку Парфюмерия
    const clickCatalog = await driver.findElement(
      By.xpath("//a[@class='s-mainMenu__link']//span[text()='Парфюмерия']")
    );
    await clickCatalog.click();
    await sleep(3000);

    // нажатие на Женская
    const clickWomen = await driver.findElement(
      By.xpath(
        "//a[@class='s-subnav__link s-subnav__listItemLink s-subnav__listItemLink--highlighted']//span[text()='Женская']"
      )
    );
    await clickWomen.click();
    await sleep(3000);

    // нажать на твор
    const clickProduct = await driver.findElement(
      By.xpath("//div[@class='b-catalogItem__brand'and text()='Kilian']")
    );
    await clickProduct.click();
    await sleep(3000);

    // нажатие на кнопку для сохранение в корзину
    const clickButton = await driver.findElement(
      By.xpath(
        "//*[@id='app']/div[6]/div/main/article/div[3]/div/div[2]/div[2]/ul/li[1]/div[1]/div[4]"
      )
    );
    await clickButton.click();
    await sleep(3000);

    // оформление заказа
    const oformProduct = await driver.findElement(
      By.xpath(
        "//a[@class='s-button s-button--fluid s-button--modern c-productAddPopup__successBtn']"
      )
    );
    await oformProduct.click();
    await sleep(3000);

    console.log("Тест успешно выполнен!");
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

(async () => {
  let driver = null;
  try {
    driver = await setupDriver();
    await executeTest(driver);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
