import { chromium } from "@playwright/test";

(async () => {
  // 1. Launch browser with slowMo so your sir can see every action clearly
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1200, // 1.2 second pause between actions for clear viewing
  });

  // 2. Set up video recording destination
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/walkthrough/",
      size: { width: 1280, height: 720 },
    },
  });

  const page = await context.newPage();

  console.log("1. Launching NexKart Application...");
  await page.goto("https://nex-kart-fullstack-ecommerce-applic.vercel.app");
  await page.waitForTimeout(2500);

  console.log("2. Browsing Products Page...");
  await page.getByRole("link", { name: "Products", exact: true }).click();
  await page.waitForTimeout(2500);

  // Scroll smoothly down the product list
  await page.mouse.wheel(0, 450);
  await page.waitForTimeout(2000);

  console.log("3. Navigating to Login Page...");
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.waitForTimeout(2000);

  // Fill in demo credentials
  console.log("4. Entering User Credentials...");
  await page.getByPlaceholder(/name@example.com/i).fill("sang@gmail.com");
  await page.locator('input[type="password"]').fill("sang123");
  await page.waitForTimeout(2500);

  console.log("5. Completing Walkthrough and Saving Video...");
  // Closing context finalizes and writes the .webm video file
  await context.close();
  await browser.close();

  console.log(
    'Done! Video recorded successfully inside "videos/walkthrough/".',
  );
})();
