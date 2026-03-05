# OpenCart Login Functionality - Comprehensive Test Plan

## Application Overview

Comprehensive test automation plan for OpenCart demo login functionality covering all Gherkin scenarios from user story AG-2. This plan validates user authentication, form validation, error handling, password recovery, and cross-browser compatibility for the login system.

## Test Scenarios

### 1. Positive Login Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Credentials

**File:** `tests/login/successful-login.spec.ts`

**Steps:**
  1. Navigate to OpenCart demo homepage at https://demo.opencart.com
    - expect: The OpenCart homepage should load successfully
    - expect: Page title should contain 'Your Store'
    - expect: My Account link should be visible in navigation
  2. Click on 'My Account' dropdown in the top navigation
    - expect: My Account dropdown menu should appear
    - expect: Login and Register options should be visible
  3. Select 'Login' from the My Account dropdown
    - expect: Should be redirected to login page
    - expect: Login form should display with email and password fields
    - expect: Page URL should contain '/login'
  4. Enter valid email address 'test@opencart.com' in email field
    - expect: Email input field should accept the value
    - expect: Field should show valid input state
  5. Enter valid password 'password123' in password field
    - expect: Password field should accept input
    - expect: Password should be masked with asterisks
  6. Click the Login button to submit credentials
    - expect: Should redirect to account dashboard
    - expect: Welcome message should display user name
    - expect: My Account link should show logged-in state
    - expect: URL should change to account page

#### 1.2. Remember Me Checkbox Functionality

**File:** `tests/login/remember-me-functionality.spec.ts`

**Steps:**
  1. Navigate directly to the login page
    - expect: Login page should be displayed
    - expect: All form elements should be visible
    - expect: Remember Me checkbox should be present
  2. Enter valid credentials and check 'Remember Me' option
    - expect: Credentials should be entered successfully
    - expect: Remember Me checkbox should be checked
  3. Submit login form and verify successful authentication
    - expect: Login should succeed
    - expect: Account dashboard should be displayed
  4. Close browser, reopen and navigate to OpenCart site
    - expect: Should still be logged in
    - expect: Session should persist
    - expect: No re-login required
  5. Test session behavior when Remember Me is not checked
    - expect: Should be automatically logged out
    - expect: Session should not persist
    - expect: Login form should be displayed

### 2. Negative Login Scenarios

**Seed:** `tests/seed.spec.ts`

#### 2.1. Failed Login with Invalid Email

**File:** `tests/login/invalid-email-login.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be displayed correctly
  2. Enter invalid email 'invalid-email-format' without @ symbol
    - expect: Invalid email should be entered in field
  3. Enter valid password 'password123'
    - expect: Valid password should be entered
  4. Click Login button to attempt authentication
    - expect: Error message should display: 'Warning: No match for E-Mail Address and/or Password.'
    - expect: Should remain on login page
    - expect: Form should handle error state properly

#### 2.2. Failed Login with Wrong Password

**File:** `tests/login/invalid-password-login.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be ready for input
  2. Enter valid email address 'test@opencart.com'
    - expect: Valid email should be entered successfully
  3. Enter invalid password 'wrongpassword123'
    - expect: Wrong password should be entered
  4. Attempt login with wrong password
    - expect: Error message should appear: 'Warning: No match for E-Mail Address and/or Password.'
    - expect: Should stay on login page
    - expect: Security should not reveal which field is incorrect

#### 2.3. Empty Fields Validation

**File:** `tests/login/empty-fields-validation.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be displayed
  2. Leave email field completely empty
    - expect: Email field should remain empty
  3. Leave password field completely empty
    - expect: Password field should remain empty
  4. Click Login button with empty form
    - expect: Validation messages should appear for required fields
    - expect: Form should not submit
    - expect: Should display field-specific error messages

### 3. Form Validation Testing

**Seed:** `tests/seed.spec.ts`

#### 3.1. Email Format Client-Side Validation

**File:** `tests/login/email-format-validation.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be available
  2. Enter email without @ symbol: 'testexample.com'
    - expect: Invalid email format should trigger validation
  3. Enter valid password 'password123'
    - expect: Valid password should be entered
  4. Attempt to submit form and verify validation
    - expect: Client-side validation should prevent form submission
    - expect: Email format error should be displayed
    - expect: Should remain on login page

#### 3.2. Input Field Character Limits and Special Characters

**File:** `tests/login/input-field-limits.spec.ts`

**Steps:**
  1. Test email field with 500+ character input
    - expect: Login form should handle long inputs gracefully
  2. Test password field with 500+ character input
    - expect: Password field should handle long inputs
  3. Test special characters: !@#$%^&*()_+ in email and password fields
    - expect: Form should handle special characters safely
    - expect: Should not break layout or functionality
  4. Test Unicode characters and international text input
    - expect: Unicode characters should be handled properly
    - expect: International characters should not break form

#### 3.3. Security - SQL Injection Prevention

**File:** `tests/login/sql-injection-prevention.spec.ts`

**Steps:**
  1. Enter SQL injection payload in email field: ' OR '1'='1' --
    - expect: Form should safely handle SQL injection attempts
  2. Enter SQL injection in password: '; DROP TABLE users; --
    - expect: Form should safely handle malicious input
  3. Submit form and verify security handling
    - expect: Application should not be compromised
    - expect: Should display standard error message
    - expect: Database should remain intact

### 4. Password Recovery Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Forgot Password Link and Navigation

**File:** `tests/login/forgot-password-navigation.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be displayed
    - expect: Forgotten Password link should be visible
  2. Click on 'Forgotten Password' link
    - expect: Should redirect to password recovery page
    - expect: Recovery form should be displayed
    - expect: Page URL should change to password reset
  3. Verify password recovery form elements
    - expect: Email input field should be present
    - expect: Submit button should be available
    - expect: Instructions should be clear

#### 4.2. Password Recovery Form Processing

**File:** `tests/login/password-recovery-functionality.spec.ts`

**Steps:**
  1. Navigate to password recovery page via forgotten password link
    - expect: Password recovery page should be loaded
  2. Enter valid registered email address
    - expect: Valid email should be entered successfully
  3. Submit password recovery request
    - expect: Confirmation message should appear
    - expect: Should indicate email will be sent
    - expect: Form should provide clear feedback
  4. Test recovery with non-registered email address
    - expect: Appropriate error should be shown for invalid email
    - expect: Form should handle non-registered emails gracefully

### 5. Cross-Browser Compatibility

**Seed:** `tests/seed.spec.ts`

#### 5.1. Chrome Browser Login Functionality

**File:** `tests/cross-browser/chrome-login-testing.spec.ts`

**Steps:**
  1. Execute complete login flow in Chrome browser
    - expect: Login should work identically in Chrome
    - expect: All UI elements should render properly
    - expect: No Chrome-specific issues should occur
  2. Test Chrome autofill and password manager features
    - expect: Form autofill should work correctly
    - expect: Password manager integration should function
  3. Test login form on various Chrome viewport sizes
    - expect: Responsive design should work on different Chrome window sizes

#### 5.2. Firefox Browser Login Functionality

**File:** `tests/cross-browser/firefox-login-testing.spec.ts`

**Steps:**
  1. Execute complete login workflow in Firefox
    - expect: All login features should work in Firefox
    - expect: UI should render correctly
    - expect: No Firefox-specific bugs
  2. Test Firefox-specific form handling features
    - expect: Firefox password manager should integrate properly
    - expect: Autofill should function correctly

#### 5.3. Mobile and Tablet Responsive Login

**File:** `tests/cross-browser/mobile-responsive-login.spec.ts`

**Steps:**
  1. Test login on mobile viewport (375x667 pixels)
    - expect: Login form should be mobile-friendly
    - expect: Touch interactions should work properly
    - expect: Text should be readable without zooming
  2. Test login on tablet viewport (768x1024 pixels)
    - expect: Tablet layout should be optimized
    - expect: Form should be easily usable with touch
  3. Test portrait/landscape orientation changes during login
    - expect: Form should adapt properly to orientation changes
    - expect: No data loss during rotation

### 6. Performance and Security

**Seed:** `tests/seed.spec.ts`

#### 6.1. Login Page Load Performance

**File:** `tests/performance/login-page-performance.spec.ts`

**Steps:**
  1. Measure and verify login page load times
    - expect: Login page should load within 3 seconds
    - expect: All resources should load efficiently
  2. Measure login response time performance
    - expect: Login authentication should respond within 2 seconds
    - expect: User should get immediate feedback
  3. Test concurrent login performance
    - expect: Page should handle multiple simultaneous logins
    - expect: Performance should not degrade significantly

#### 6.2. Login Security and Data Protection

**File:** `tests/security/login-security-validation.spec.ts`

**Steps:**
  1. Monitor network requests during login process
    - expect: Password should not appear in network logs
    - expect: HTTPS should be enforced
    - expect: No sensitive data in URL parameters
  2. Test XSS prevention in login form fields
    - expect: XSS attempts should be safely handled
    - expect: Scripts should not execute in form fields
    - expect: Application should remain secure
  3. Verify CSRF protection on login form
    - expect: CSRF protection should be implemented
    - expect: Forms should have proper token validation
  4. Test login rate limiting and brute force protection
    - expect: Rate limiting should prevent brute force attacks
    - expect: Multiple failed attempts should be handled
