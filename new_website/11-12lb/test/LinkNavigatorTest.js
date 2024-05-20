// const { Builder } = require("selenium-webdriver");
// const assert = require("assert");
// const WomenPage = require("../page/WomenPage");
// const HomePage = require("../page/HomePage");
// const ProductPage = require("../page/ProductPage");

// describe("LinkNavigatorTest", function () {
//   let driver;
//   let homePage;
//   let womenPage;
//   let productPage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     homePage = new HomePage(driver);
//     womenPage = new WomenPage(driver);
//     productPage = new ProductPage(driver);
//   });

//   it("LinkNavigatorTest", async function () {
//     await driver.get("https://randewoo.ru/");
//         await homePage.waitSeconds(3);
//         await homePage.clickMenuButton();
//         await homePage.waitSeconds(2);
//         await homePage.clickWomenButton();
//         await homePage.waitSeconds(2);
//         await womenPage.clickProductButton();
//         await homePage.waitSeconds(2);
//         await productPage.clickIconLinkButton();
//         await homePage.waitSeconds(7);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
