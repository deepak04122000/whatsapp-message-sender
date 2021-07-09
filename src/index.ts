import puppeteer, { Browser } from "puppeteer";

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://google.com");
//     await page.pdf({ path: "google.pdf" });

//     await browser.close();
// })();

async function scrap(urls: string[]) {
  const browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  for (let index = 0; index < urls.length; index++) {
    await send(page, urls[index]);
  }
  console.log("Done");
}

const send = async (page: puppeteer.Page, url: string) => {
  await page.goto(url);
  await page.waitForFunction("window.alert");
  await page.keyboard.press("Enter");
  await page.waitForSelector('span[title="MB"]');
  // const target = await page.$('span[title="MB"]');
  // await target.click();
  // const input = await page.$(
  //   "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
  // );
  // await input.type("HEllo from code.....");
  await page.keyboard.press("Enter");
  await wait(10000);
};

const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
};

try {
  scrap([
    "https://web.whatsapp.com/send?phone=+910000000000&text=banana",
    "https://web.whatsapp.com/send?phone=+910000000000&text=mango",
    "https://web.whatsapp.com/send?phone=+910000000000&text=guavava",
    "https://web.whatsapp.com/send?phone=+910000000000&text=pineapple",
    "https://web.whatsapp.com/send?phone=+910000000000&text=kivi",
    "https://web.whatsapp.com/send?phone=+910000000000&text=jackfruit",
    "https://web.whatsapp.com/send?phone=+910000000000&text=papaya",
    "https://web.whatsapp.com/send?phone=+910000000000&text=fig",
    "https://web.whatsapp.com/send?phone=+910000000000&text=grapes",
    "https://web.whatsapp.com/send?phone=+910000000000&text=blackberry",
  ]);
} catch (e) {
  console.log(e);
}
