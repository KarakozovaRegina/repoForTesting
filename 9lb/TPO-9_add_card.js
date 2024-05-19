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
    await sleep(9000);

    // Нажать на ссылку "каталог"
    const clickСatalog = await driver.findElement(
      By.xpath(
        "//span[@class='app-desktop-visible']"
      )
    );
    await clickСatalog.click();
    await sleep(3000);

     // Нажать на ссылку "Хиты продаж"
    const hitProduct = await driver.findElement(
      By.xpath(
        "//span[text()='Хиты продаж'][1]"
      )
    );
    await hitProduct.click();
    await sleep(1000);

    // Поиск футболки
    const whiteT_shirt = await driver.findElement(
      By.xpath(
        "//a[contains(@class, 'catalog-name__link') and contains(text(), 'Футболка женская в белом цвете')]"
      )
    );
    await whiteT_shirt.click();
    await sleep(1000);

    // ВЫбор размера
    const get_size = await driver.findElement(
        By.xpath(
          "//div[@class='chosen-value']"
        )
      );
      await get_size.click();
      await sleep(1000);


    const get_size_tochno = await driver.findElement(
        By.xpath(
          "//div[@class='w25per size']"
        )
      );
      await get_size_tochno.click();
      await sleep(1000);

// ВЫбор цвет
const get_color= await driver.findElement(
    By.xpath(
      "//*[@id='bx_117848907_596752']/div[1]/div[3]/div[1]/div[2]/div[3]/ul/li[1]/a/picture/img"
    )
  );
  await get_color.click();
  await sleep(1000);

  // нажаьие на кнопку
const get_buttom= await driver.findElement(
    By.xpath(
      "//a[@id='bx_117848907_596752_add_basket_link']"
    )
  );
  await get_buttom.click();
  await sleep(1000);
      

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
