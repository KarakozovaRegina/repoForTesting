// const { Builder } = require("selenium-webdriver");
// const assert = require("assert");
// const WomenPage = require("../page/WomenPage");
// const HomePage = require("../page/HomePage");

// describe("SortTest", function () {
//   let driver;
//   let womenPage;
//   let homePage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     womenPage = new WomenPage(driver);
//     homePage = new HomePage(driver);
//   });

//   it("SortTest", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(3);
//     await homePage.clickMenuButton();
//     await homePage.waitSeconds(2);
//     await homePage.clickWomenButton();
//     await homePage.waitSeconds(2);
//     await womenPage.clickSortDiv();
//     await homePage.waitSeconds(2);
//     await womenPage.choiceSortElement();
//     await homePage.waitSeconds(7);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
