const puppeteer = require("puppeteer");

const url =
  "https://www.amazon.in/new-balance-Running-Shoe-10-5-ML850YSA/dp/B084KJZVQH/";

async function configureBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

async function checkPrice(page) {
  await page.reload();
  let price = await page.evaluate(
    () => document.getElementById("priceblock_ourprice").innerText
  );
  console.log(price);
}

async function monitor() {
  let page = await configureBrowser();
  await checkPrice(page);
}
monitor();
