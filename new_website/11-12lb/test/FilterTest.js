// const { Builder } = require("selenium-webdriver");
// const WomenPage = require("../page/WomenPage");
// const HomePage = require("../page/HomePage");

// describe("FilterTest", function () {
//   let driver;
//   let womenPage;
//   let homePage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     womenPage = new WomenPage(driver);
//     homePage = new HomePage(driver);
//   });

//   it("FilterTest", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(3);
//     await homePage.clickMenuButton();
//     await homePage.waitSeconds(2);
//     await homePage.clickWomenButton();
//     await homePage.waitSeconds(2);
//     await womenPage.clickButtonFilter();
//     await homePage.waitSeconds(2);
//     await womenPage.choiceElementFilter();
//     await homePage.waitSeconds(2);
//     await womenPage.clickButtonchoiceFilter();
//     await homePage.waitSeconds(4);

//     await homePage.waitSeconds(7);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
