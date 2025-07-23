import puppeteer from "puppeteer";


export const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ],
    executablePath: process.env.NODE_ENV === 'production'
      ? '/opt/render/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome'
      : undefined
  });
  const page = await browser.newPage();
  return { browser, page };
};
