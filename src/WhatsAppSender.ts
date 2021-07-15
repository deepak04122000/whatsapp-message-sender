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
    try {
      await sendProcess(page, urls[index], index);
    } catch (e) {
      console.log(urls[index]);
    } finally {
      continue;
    }
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
  const phone = url.split("&")[0].split("+91")[1];
  const p1 = phone.slice(0, 5);
  const p2 = phone.slice(5, 10);

  await page.waitForSelector(`span[title="+91 ${p1} ${p2}"]`, {
    timeout: 15000,
  });
  await wait(3000);
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
