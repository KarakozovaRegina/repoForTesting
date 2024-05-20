// const { Builder } = require("selenium-webdriver");
// const assert = require("assert");
// const HomePage = require("../page/HomePage");

// describe("EmailTest", function () {
//   let driver;
//   let homePage;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//     homePage = new HomePage(driver);
//   });

//   it("EmailTest", async function () {
//     await driver.get("https://randewoo.ru/");
//     await homePage.waitSeconds(4);
//     await homePage.inputEmail('reginakarakozova@mail.ru');
//     await homePage.waitSeconds(2);
//     await homePage.clickEmailButton();
//     await homePage.waitSeconds(7);
//   });

//   after(async function () {
//     await driver.quit();
//   });
// });
