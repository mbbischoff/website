const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 768 }); // set the viewport to 1024x768
  await page.goto('http://localhost:4000');
  await page.screenshot({ path: 'screenshot/screenshot.png' });

  await browser.close();
}

run();
