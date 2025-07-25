import puppeteer from "puppeteer";

export const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: 'new', // Use 'new' instead of true for better compatibility
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
      '--disable-extensions',
      '--disable-default-apps'
    ]
    // Remove executablePath - let Puppeteer handle it automatically
    // executablePath: process.env.NODE_ENV === 'production'
    //   ? '/opt/render/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome'
    //   : undefined
    // timeout: 30000
  });
  
  const page = await browser.newPage();
  
  // Set a reasonable viewport
  await page.setViewport({ width: 1280, height: 720 });
  
  return { browser, page };
};