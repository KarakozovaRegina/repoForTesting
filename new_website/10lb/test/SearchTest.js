const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const HomePage = require("./HomePage.js");

(async function PageObjectTests() {
  let driver = await new Builder().forBrowser("chrome").build();
  let homePage = new HomePage(driver);

  try {
        // Тест на посик
    await driver.get("https://randewoo.ru/");
    await homePage.waitSeconds(2);
    await homePage.inputSeach('KILIAN');
    await homePage.waitSeconds(2);
    await homePage.clickSeachButton();
    await homePage.waitSeconds(4);

    // Проверка, что продукт находится в корзине
    const isProductAdded = await homePage.isProductInPage();
    assert.strictEqual(isProductAdded, true, 'Продукт найден');
    console.log("Успешный поиск");



    // Тест на отправку почты
    await homePage.waitSeconds(2);
    await driver.get("https://randewoo.ru/");
    await homePage.waitSeconds(4);
    await homePage.inputEmail("reginakarakozova@mail.ru");
    await homePage.waitSeconds(2);
    await homePage.clickEmailButton();
    await homePage.waitSeconds(7);
    console.log("Успешно отправка почты");


  } finally {
    await driver.quit();
  }
})();
