// const { Builder } = require("selenium-webdriver");
// const assert = require("assert");
// const WomenPage = require("../page/WomenPage");
// const ProductPage = require("../page/ProductPage");
// const HomePage = require("../page/HomePage");
// const BasketPage = require("../page/BasketPage");

// describe("AddInBasketTest", function () {
//   let driver;
//   let womenPage;
//   let productPage;
//   let homePage;
//   let basketPage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     womenPage = new WomenPage(driver);
//     productPage = new ProductPage(driver);
//     homePage = new HomePage(driver);
//     basketPage = new BasketPage(driver);
//   });

//   it("testAddInBasket", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(3);
//     await homePage.clickMenuButton();
//     await homePage.waitSeconds(2);
//     await homePage.clickWomenButton();
//     await homePage.waitSeconds(2);
//     await womenPage.clickProductButton();
//     await homePage.waitSeconds(2);
//     await productPage.addBasketButton();
//     await homePage.waitSeconds(2);
//     await productPage.clickButtonForm();
//     await homePage.waitSeconds(3);

//     // Проверка, что продукт находится в корзине
//     const isProductAdded = await basketPage.isProductInBasket();
//     assert.strictEqual(isProductAdded, true, 'Продукт не был добавлен в корзину');
//     await homePage.waitSeconds(3);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
