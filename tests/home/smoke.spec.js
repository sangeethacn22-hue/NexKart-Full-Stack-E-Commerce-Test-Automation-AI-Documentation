import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage.js";

test.describe("NexKart Application Smoke Test", () => {
  test("TC01 - Verify Home Page loads correctly with all essential navigation elements", async ({
    page,
  }) => {
    // 1. Arrange: Instantiate Page Object
    const homePage = new HomePage(page);

    // 2. Act: Navigate to Home URL
    await homePage.open();

    // 3. Assert: Brand and title verification
    await expect(page).toHaveTitle(/NexKart/i);
    await expect(homePage.navbarBrand).toBeVisible();
    await expect(homePage.navbarBrand).toContainText("NexKart");

    // 4. Assert: Verified navigation links
    await expect(homePage.productsNavLink).toBeVisible();
    await expect(homePage.cartLink).toBeVisible();
    await expect(homePage.loginLink).toBeVisible();
    await expect(homePage.signUpLink).toBeVisible();
  });
});
