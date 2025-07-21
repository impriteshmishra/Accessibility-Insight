import puppeteer from "puppeteer";

export const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  return { browser, page };
};
