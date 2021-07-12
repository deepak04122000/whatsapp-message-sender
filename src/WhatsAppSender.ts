import puppeteer from "puppeteer";

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://google.com");
//     await page.pdf({ path: "google.pdf" });

//     await browser.close();
// })();

export class WhatsAppSender {
  constructor(public links: string[]) {}

  send() {
    try {
      scrap(this.links);
    } catch (e) {
      console.log(e);
    }
  }
}

async function scrap(urls: string[]) {
  const browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  for (let index = 0; index < urls.length; index++) {
    await sendProcess(page, urls[index], index);
  }
  console.log("Done");
  browser.close();
}

const sendProcess = async (
  page: puppeteer.Page,
  url: string,
  index: number
) => {
  await page.goto(url);
  await page.waitForFunction("window.alert");
  await page.keyboard.press("Enter");
  await page.waitForSelector('span[title="P P Group"]', { timeout: 100000 });
  // const target = await page.$('span[title="MB"]');
  // await target.click();
  // const input = await page.$(
  //   "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
  // );
  // await input.type("HEllo from code.....");
  if (index === 0) {
    console.log(index);
    await wait(6000);
  } else {
    await wait(1000);
  }
  await page.keyboard.press("Enter");
  await wait(4000);
};

const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
};
