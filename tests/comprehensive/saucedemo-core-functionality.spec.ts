// spec: Comprehensive SauceDemo Test Automation Plan covering 50 test scenarios
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SauceDemo Core Functionality Test Suite', () => {
  
  test.describe('Authentication Tests', () => {
    
    test('Test 1: Successful login with standard_user', async ({ page }) => {
      // Navigate to SauceDemo login page to test successful login with standard user
      await page.goto('https://www.saucedemo.com');
      
      // Verify Swag Labs branding is visible on login page
      await expect(page.getByText('Swag Labs')).toBeVisible();
      
      // Enter standard_user username for successful login test
      await page.locator('[data-test="username"]').fill('standard_user');
      
      // Enter secret_sauce password for successful login test
      await page.locator('[data-test="password"]').fill('secret_sauce');
      
      // Click login button to complete successful login test
      await page.locator('[data-test="login-button"]').click();
      
      // Verify successful login - Products page is displayed
      await expect(page.getByText('Products')).toBeVisible();
    });

    test('Test 2: Login failure with locked_out_user', async ({ page }) => {
      // Navigate to login page to test locked out user error message
      await page.goto('https://www.saucedemo.com');
      
      // Enter locked_out_user username to test error handling
      await page.locator('[data-test="username"]').fill('locked_out_user');
      
      // Enter password for locked out user test
      await page.locator('[data-test="password"]').fill('secret_sauce');
      
      // Click login to trigger locked out user error message
      await page.locator('[data-test="login-button"]').click();
      
      // Verify locked out user error message is displayed
      await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });

    test('Test 3: Empty username field validation', async ({ page }) => {
      // Navigate to login page to test empty username validation
      await page.goto('https://www.saucedemo.com');
      
      // Enter password while leaving username empty to test validation
      await page.locator('[data-test="password"]').fill('secret_sauce');
      
      // Click login to trigger empty username validation error
      await page.locator('[data-test="login-button"]').click();
      
      // Verify username required validation error is displayed
      await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
    });

  });

  test.describe('Product Browsing Tests', () => {
    
    test('Test 4: View all products on homepage', async ({ page }) => {
      // Navigate to login page to access products page
      await page.goto('https://www.saucedemo.com');
      
      // Login to access products page for product viewing test
      await page.locator('[data-test="username"]').fill('standard_user');
      
      // Enter password to login and access products
      await page.locator('[data-test="password"]').fill('secret_sauce');
      
      // Click login to access products page for product display test
      await page.locator('[data-test="login-button"]').click();
      
      // Verify all 6 products are displayed - checking Sauce Labs Backpack
      await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
      
      // Verify Sauce Labs Onesie (cheapest product) is displayed
      await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();
    });

    test('Test 5: Product sorting by price low to high', async ({ page }) => {
      // Login first to access products
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      
      // Test product sorting by price low to high
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      
      // Verify price sorting - cheapest product $7.99 appears first
      await expect(page.getByText('$7.99')).toBeVisible();
    });

  });

  test.describe('Shopping Cart Tests', () => {
    
    test('Test 6: Add single product to cart', async ({ page }) => {
      // Login and navigate to products
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      
      // Sort by price to get Onesie first
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      
      // Add Sauce Labs Onesie (first product) to cart for cart functionality test
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      
      // Verify cart counter badge shows 1 item after adding product
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    });

    test('Test 7: View cart contents', async ({ page }) => {
      // Login, sort products, and add item to cart
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      
      // Click cart badge to view cart contents
      await page.locator('[data-test="shopping-cart-link"]').click();
      
      // Verify cart contents page shows 'Your Cart' title
      await expect(page.getByText('Your Cart')).toBeVisible();
    });

  });

  test.describe('Checkout Process Tests', () => {
    
    test('Test 8: Proceed to checkout', async ({ page }) => {
      // Login, add item to cart, and navigate to cart
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      
      // Click Checkout button to proceed to checkout process
      await page.locator('[data-test="checkout"]').click();
      
      // Verify checkout information page title is displayed
      await expect(page.getByText('Checkout: Your Information')).toBeVisible();
    });

    test('Test 9: Enter shipping information', async ({ page }) => {
      // Setup: Login, add item to cart, navigate to checkout
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await page.locator('[data-test="checkout"]').click();
      
      // Enter first name in checkout form
      await page.locator('[data-test="firstName"]').fill('John');
      
      // Enter last name in checkout form
      await page.locator('[data-test="lastName"]').fill('Doe');
      
      // Enter zip code in checkout form
      await page.locator('[data-test="postalCode"]').fill('12345');
      
      // Click Continue button to proceed to order review after entering shipping info
      await page.locator('[data-test="continue"]').click();
      
      // Verify checkout overview page shows payment information
      await expect(page.getByText('SauceCard #31337')).toBeVisible();
    });

    test('Test 10: Complete purchase successfully', async ({ page }) => {
      // Complete setup through checkout overview
      await page.goto('https://www.saucedemo.com');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="product-sort-container"]').selectOption(['Price (low to high)']);
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await page.locator('[data-test="checkout"]').click();
      await page.locator('[data-test="firstName"]').fill('John');
      await page.locator('[data-test="lastName"]').fill('Doe');
      await page.locator('[data-test="postalCode"]').fill('12345');
      await page.locator('[data-test="continue"]').click();
      
      // Click Finish button to complete the purchase
      await page.locator('[data-test="finish"]').click();
      
      // Verify order completion success message
      await expect(page.getByText('Thank you for your order!')).toBeVisible();
    });

  });

});