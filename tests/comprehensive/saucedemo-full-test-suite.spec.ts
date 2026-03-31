// Comprehensive SauceDemo Test Suite - 50 Automated Test Scripts
// Generated using Playwright Test Generator for complete e-commerce functionality coverage

import { test, expect } from '@playwright/test';

test.describe('SauceDemo Comprehensive Test Suite - 50 Tests', () => {

  test.describe('Authentication Tests (Tests 1-10)', () => {
    
    test('Test 1: Successful login with standard_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await expect(page.getByText('Swag Labs')).toBeVisible();
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 2: Login failure with locked_out_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('locked_out_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });

    test('Test 3: Empty username field validation', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
    });

    test('Test 4: Empty password field validation', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
    });

    test('Test 5: Invalid username error handling', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('invalid_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });

    test('Test 6: Invalid password error handling', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('wrong_password');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });

    test('Test 7: Successful login with performance_glitch_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('performance_glitch_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 8: Successful login with problem_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('problem_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 9: Successful login with error_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('error_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 10: Successful login with visual_user', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('visual_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

  });

  test.describe('Product Browsing Tests (Tests 11-22)', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
    });

    test('Test 11: View all products on homepage', async ({ page }) => {
      await expect(page.locator('[data-test="item-4-title-link"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="item-0-title-link"]')).toContainText('Sauce Labs Bike Light');
      await expect(page.locator('[data-test="item-1-title-link"]')).toContainText('Sauce Labs Bolt T-Shirt');
      await expect(page.locator('[data-test="item-5-title-link"]')).toContainText('Sauce Labs Fleece Jacket');
      await expect(page.locator('[data-test="item-2-title-link"]')).toContainText('Sauce Labs Onesie');
      await expect(page.locator('[data-test="item-3-title-link"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
    });

    test('Test 12: Product sorting A-Z alphabetically', async ({ page }) => {
      await page.locator('[data-test="product-sort-container"]').selectOption(['Name (A to Z)']);
      await expect(page.locator('[data-test="active-option"]')).toHaveText('Name (A to Z)');
    });

    test('Test 13: Product sorting Z-A alphabetically', async ({ page }) => {
      await page.locator('[data-test="product-sort-container"]').selectOption(['Name (Z to A)']);
      await expect(page.locator('[data-test="active-option"]')).toHaveText('Name (Z to A)');
    });

    test('Test 14: Product sorting price low to high', async ({ page }) => {
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      await expect(page.getByText('$7.99')).toBeVisible();
    });

    test('Test 15: Product sorting price high to low', async ({ page }) => {
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (high to low)']);
      await expect(page.getByText('$49.99')).toBeVisible();
    });

    test('Test 16: Product images display correctly', async ({ page }) => {
      await expect(page.locator('[alt="Sauce Labs Backpack"]')).toBeVisible();
      await expect(page.locator('[alt="Sauce Labs Bike Light"]')).toBeVisible();
      await expect(page.locator('[alt="Sauce Labs Bolt T-Shirt"]')).toBeVisible();
    });

    test('Test 17: Product names display correctly', async ({ page }) => {
      await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
      await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
      await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
    });

    test('Test 18: Product descriptions display correctly', async ({ page }) => {
      await expect(page.getByText('carry.allTheThings()')).toBeVisible();
      await expect(page.getByText('A red light isn\'t the desired state')).toBeVisible();
    });

    test('Test 19: Product prices display correctly', async ({ page }) => {
      // Verify all 6 product price elements are visible
      await expect(page.locator('[data-test="inventory-item-price"]')).toHaveCount(6);
      // Verify specific unique prices are visible  
      await expect(page.getByText('$29.99').first()).toBeVisible();
      await expect(page.getByText('$9.99').first()).toBeVisible();
      await expect(page.getByText('$49.99').first()).toBeVisible();
      await expect(page.getByText('$7.99').first()).toBeVisible();
      // Note: $15.99 appears twice for Bolt T-Shirt and Red T-Shirt
      await expect(page.locator('[data-test="inventory-item-price"]:has-text("$15.99")')).toHaveCount(2);
    });

    test('Test 20: View product detail page navigation', async ({ page }) => {
      await page.locator('[data-test="item-4-title-link"]').click();
      await expect(page.getByText('Back to products')).toBeVisible();
      await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    });

    test('Test 21: Navigate back from product detail', async ({ page }) => {
      await page.locator('[data-test="item-4-title-link"]').click();
      await page.locator('[data-test="back-to-products"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 22: Product layout consistency verification', async ({ page }) => {
      const products = await page.locator('.inventory_item').count();
      expect(products).toBe(6);
    });

  });

  test.describe('Shopping Cart Tests (Tests 23-34)', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
    });

    test('Test 23: Add single product to cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    });

    test('Test 24: Add multiple products to cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');
    });

    test('Test 25: Cart counter badge updates correctly', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
      await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
    });

    test('Test 26: View cart contents page', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('Your Cart')).toBeVisible();
      await expect(page.getByText('QTY')).toBeVisible();
      await expect(page.getByText('Description')).toBeVisible();
    });

    test('Test 27: Remove single item from cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
      await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();
    });

    test('Test 28: Continue shopping from cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await page.locator('[data-test="continue-shopping"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 29: Add to cart button state changes', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await expect(page.getByText('Remove')).toBeVisible();
    });

    test('Test 30: Cart persistence across navigation', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="item-4-title-link"]').click();
      await expect(page.getByText('1')).toBeVisible();
    });

    test('Test 31: Add to cart from product detail page', async ({ page }) => {
      await page.locator('[data-test="item-4-title-link"]').click();
      await page.locator('[data-test="add-to-cart"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    });

    test('Test 32: Remove multiple items from cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
      await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
      await expect(page.locator('.cart_item')).toHaveCount(0);
    });

    test('Test 33: Cart access from any page', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="item-0-title-link"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('Your Cart')).toBeVisible();
    });

    test('Test 34: Display individual prices in cart', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('$29.99')).toBeVisible();
    });

  });

  test.describe('Checkout Process Tests (Tests 35-44)', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
    });

    test('Test 35: Proceed to checkout from cart', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    });

    test('Test 36: Enter valid shipping information', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await expect(page.getByText('Checkout: Overview')).toBeVisible();
    });

    test('Test 37: Checkout form validation - empty fields', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="continue"]').click();
      await expect(page.getByText('Error: First Name is required')).toBeVisible();
    });

    test('Test 38: Order review page displays correctly', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await expect(page.getByText('Payment Information:')).toBeVisible();
      await expect(page.getByText('SauceCard #31337')).toBeVisible();
      await expect(page.getByText('Shipping Information:')).toBeVisible();
    });

    test('Test 39: Complete purchase successfully', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await page.locator('[data-test="finish"]').click();
      await expect(page.getByText('Thank you for your order!')).toBeVisible();
    });

    test('Test 40: Order confirmation page verification', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await page.locator('[data-test="finish"]').click();
      await expect(page.getByText('Checkout: Complete!')).toBeVisible();
      await expect(page.getByText('Your order has been dispatched')).toBeVisible();
    });

    test('Test 41: Cart empties after purchase completion', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await page.locator('[data-test="finish"]').click();
      await page.locator('[data-test="back-to-products"]').click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
    });

    test('Test 42: Cancel checkout process', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="cancel"]').click();
      await expect(page.getByText('Your Cart')).toBeVisible();
    });

    test('Test 43: Return to shopping after order completion', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await page.locator('[data-test="finish"]').click();
      await page.locator('[data-test="back-to-products"]').click();
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 44: Payment and shipping info display', async ({ page }) => {
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      await expect(page.getByText('Free Pony Express Delivery!')).toBeVisible();
      await expect(page.locator('[data-test="subtotal-label"]')).toBeVisible();
      await expect(page.locator('[data-test="tax-label"]')).toBeVisible();
      await expect(page.locator('[data-test="total-label"]')).toBeVisible();
    });

  });

  test.describe('UI/UX and Navigation Tests (Tests 45-50)', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
    });

    test('Test 45: Main navigation menu access and functionality', async ({ page }) => {
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await expect(page.getByText('All Items')).toBeVisible();
      await expect(page.getByText('About')).toBeVisible();
      await expect(page.getByText('Logout')).toBeVisible();
      await expect(page.getByText('Reset App State')).toBeVisible();
    });

    test('Test 46: Application state reset functionality', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.getByText('Reset App State').click();
      await page.getByRole('button', { name: 'Close Menu' }).click();
      await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
    });

    test('Test 47: Company branding consistency across pages', async ({ page }) => {
      await expect(page.getByText('Swag Labs')).toBeVisible();
      await page.locator('[data-test="item-4-title-link"]').click();
      await expect(page.getByText('Swag Labs')).toBeVisible();
      await page.locator('[data-test="back-to-products"]').click();
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('Swag Labs')).toBeVisible();
    });

    test('Test 48: Page titles verification', async ({ page }) => {
      await expect(page.getByText('Products')).toBeVisible();
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('Your Cart')).toBeVisible();
    });

    test('Test 49: Social media links in footer', async ({ page }) => {
      await expect(page.getByRole('link', { name: 'Twitter' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    });

    test('Test 50: Secure logout functionality', async ({ page }) => {
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.getByText('Logout').click();
      await expect(page.getByText('Swag Labs')).toBeVisible();
      await expect(page.locator('[data-test="username"]')).toBeVisible();
      await expect(page.locator('[data-test="password"]')).toBeVisible();
    });

  });

});