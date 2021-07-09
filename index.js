const puppeteer = require('puppeteer');

async function scrap(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span[title='Sonu New Wh']");
  const target = await page.$("span[title='Sonu New Wh']");
  await target.click();
  const input = await page.$(
    '#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text'
  );

  for (i = 0; i < 20; i++) {
    await input.type('Lo Ab message ki word meaning correct kar diya');
    await page.keyboard.press('Enter');
  }
}

scrap('https://web.whatsapp.com/');
