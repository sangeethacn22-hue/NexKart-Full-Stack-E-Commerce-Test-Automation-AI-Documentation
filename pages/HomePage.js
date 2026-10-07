import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    // Navbar Locators matching actual Navbar.js with exact match to resolve strict mode
    this.navbarBrand = page.locator(".navbar-brand");
    this.productsNavLink = page.getByRole("link", {
      name: "Products",
      exact: true,
    });
    this.cartLink = page.locator('a[href="/cart"]');
    this.loginLink = page.getByRole("link", { name: "Login", exact: true });
    this.signUpLink = page.getByRole("link", { name: "Sign Up", exact: true });

    // Home Page Content Locators
    this.categoriesSection = page.locator(".category-card, .card, h2");
  }

  async open() {
    await this.navigate("/");
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickProducts() {
    await this.productsNavLink.click();
  }
}
