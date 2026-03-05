// spec: specs/opencart-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { TestDataFactory, getSelectors, getUrls } from '../data';

test.describe('Positive Login Scenarios', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    // Get test data for successful login scenario
    const testData = TestDataFactory.forSuccessfulLogin();
    const { credentials } = testData;
    const selectors = getSelectors();
    const urls = getUrls();
    
    // 1. Navigate to OpenCart demo homepage at https://demo.opencart.com
    await page.goto(urls.homepage);
    
    // Check for Cloudflare protection and skip test if detected (AG-3 defect)
    const pageTitle = await page.title();
    if (pageTitle.includes('Just a moment') || pageTitle.includes('security verification')) {
      test.skip(true, 'Test skipped: Cloudflare protection detected. See defect AG-3 - OpenCart Demo Login Tests Failing - Cloudflare Protection Blocking Access');
    }
    
    // Verify the homepage loads successfully
    await expect(page).toHaveTitle(/Your Store/, { timeout: 10000 });
    
    // 2. Click on 'My Account' dropdown in the top navigation
    const myAccountDropdown = page.locator(selectors.myAccountDropdown).first();
    await expect(myAccountDropdown).toBeVisible({ timeout: 10000 });
    await myAccountDropdown.click();
    
    // Verify dropdown menu appears with login option
    const loginOption = page.locator(selectors.loginLink);
    await expect(loginOption).toBeVisible({ timeout: 5000 });
    
    // 3. Select 'Login' from the My Account dropdown
    await loginOption.click();
    
    // Verify redirect to login page
    await expect(page).toHaveURL(/.*login.*/, { timeout: 10000 });
    await expect(page.locator('form')).toBeVisible({ timeout: 5000 });
    
    // 4. Enter valid email address in email field
    const emailField = page.locator(selectors.emailField).first();
    await expect(emailField).toBeVisible({ timeout: 5000 });
    await emailField.fill(credentials.email);
    
    // Verify email field accepts the input
    await expect(emailField).toHaveValue(credentials.email);
    
    // 5. Enter valid password in password field
    const passwordField = page.locator(selectors.passwordField).first();
    await expect(passwordField).toBeVisible({ timeout: 5000 });
    await passwordField.fill(credentials.password);
    
    // Verify password field accepts input and is masked
    await expect(passwordField).toHaveValue(credentials.password);
    await expect(passwordField).toHaveAttribute('type', 'password');
    
    // 6. Click the Login button to submit credentials
    const loginButton = page.locator(selectors.loginButton).first();
    await expect(loginButton).toBeVisible({ timeout: 5000 });
    await loginButton.click();
    
    // Verify successful login and redirect to account dashboard
    await expect(page).toHaveURL(/.*account.*/, { timeout: 10000 });
    
    // Verify welcome message or account dashboard elements
    const accountHeading = page.locator(selectors.accountHeading);
    await expect(accountHeading).toBeVisible({ timeout: 5000 });
    
    // Verify My Account link shows logged-in state
    const loggedInIndicator = page.locator(selectors.myAccountDropdown);
    await expect(loggedInIndicator).toBeVisible({ timeout: 5000 });
    
    // Additional verification: Check for account-specific elements
    const accountNav = page.locator('nav, .account-navigation, .sidebar');
    await expect(accountNav).toBeVisible({ timeout: 5000 });
  });
});