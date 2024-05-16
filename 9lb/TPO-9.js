const { Builder, By, Key, until } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// Создание и настройка драйвера перед запуском тестов
const setupDriver = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  return driver;
};

// Основная функция для выполнения теста
const executeTest = async (driver) => {
  try {
    await driver.get("https://markformelle.by/");
    await sleep(3000);

    // Нажать на ссылку "каталог"
    const premiumShopLink = await driver.findElement(
      By.xpath(
        "//a[@class='collections-block round-block square-box' and @href='/catalog/collections/lnyanaya-kollektsiya/']"
      )
    );
    await premiumShopLink.click();
    await sleep(3000);

    // Нажать на ссылку "Премиум магазин"
    const AcceptCookie = await driver.findElement(
      By.xpath(
        "//div[@class='multisel filter-name_color_for_filter has-more-link']"
      )
    );
    await AcceptCookie.click();
    await sleep(3000);

    // Выбрать пункт "Золото"
    const TankiLink = await driver.findElement(
      By.xpath("//span[@class='filter-item-value' and text()='белый']")
    );
    await TankiLink.click();
    await sleep(3000);

    console.log("Тест успешно выполнен!");
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

// Выполнение теста
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
