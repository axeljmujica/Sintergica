const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
  });
  
  page.on('pageerror', error => {
    console.log('UNCAUGHT PAGE ERROR:', error.message);
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Also dump HTML just in case
  const html = await page.content();
  if (html.includes('next/dynamic')) {
     console.log('Found next/dynamic error in HTML');
  }

  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
