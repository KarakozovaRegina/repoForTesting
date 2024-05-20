// const { Builder } = require("selenium-webdriver");
// const WomenPage = require("../page/WomenPage");
// const HomePage = require("../page/HomePage");
// const ProductPage = require("../page/ProductPage");
// const LikePage = require("../page/LikePage");

// describe("DeleteLikeTest", function () {
//   let driver;
//   let womenPage;
//   let homePage;
//   let productPage;
//   let likePage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     womenPage = new WomenPage(driver);
//     homePage = new HomePage(driver);
//     productPage = new ProductPage(driver);
//     likePage = new LikePage(driver);
//   });

//   it("DeleteLikeTest", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(3);
//     await homePage.clickMenuButton();
//     await homePage.waitSeconds(2);
//     await homePage.clickWomenButton();
//     await homePage.waitSeconds(2);
//     await womenPage.clickProductButton();
//     await homePage.waitSeconds(2);
//     await productPage.clikLikeButton();
//     await homePage.waitSeconds(2);
//     await productPage.clikLikePageButton();
//     await homePage.waitSeconds(2);
//     await likePage.clickDeleteLikeButton();
//     await homePage.waitSeconds(2);
//     await productPage.clikLikePageButton();
//     await homePage.waitSeconds(7);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
