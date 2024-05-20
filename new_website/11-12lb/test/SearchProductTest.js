// const { Builder } = require("selenium-webdriver");
// const assert = require("assert");
// const { By } = require("selenium-webdriver");
// const HomePage = require("../page/HomePage");
// describe("SearchProductTest", function () {
//   let driver;
//   let homePage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     homePage = new HomePage(driver);
//   });

//   it("SearchProductTest", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(2);
//     await homePage.inputSeach('KILIAN');
//     await homePage.waitSeconds(2);
//     await homePage.clickSeachButton();
//     await homePage.waitSeconds(4);

// // Проверка, что продукт находится в корзине
//     const isProductAdded = await homePage.isProductInPage();
//     assert.strictEqual(isProductAdded, true, 'Продукт найден');

//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
