const { Builder } = require("selenium-webdriver");
const assert = require("assert");
const HomePage = require("../page/HomePage");

describe("WatchVideoTest", function () {
  let driver;
  let homePage;
  let youtibe;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
  });

  it("WatchVideoTest", async function () {
    await driver.get("https://randewoo.ru/");
    await homePage.waitSeconds(4);
    await homePage.clickYouTubeButton();
    await homePage.waitSeconds(7);
  });

  after(async function () {
    await driver.quit();
  });
});
