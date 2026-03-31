# SauceDemo Login Functionality Test Plan

## Application Overview

Comprehensive test plan for SauceDemo.com login functionality covering successful authentication, error handling, validation, and user experience scenarios as specified in user story DM06032026-3.

## Test Scenarios

### 1. Login Authentication Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid standard user credentials

**File:** `tests/login/successful-login-standard-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page (https://www.saucedemo.com)
    - expect: Page loads with login form containing username field, password field, and login button
    - expect: Page displays accepted usernames and password information
  2. Enter 'standard_user' in the username field
    - expect: Username field accepts the input and displays the value
  3. Enter 'secret_sauce' in the password field
    - expect: Password field accepts the input (masked text)
  4. Click the Login button
    - expect: User is redirected to inventory page (https://www.saucedemo.com/inventory.html)
    - expect: Page displays 'Products' heading and product catalog
    - expect: Navigation menu with hamburger icon appears
    - expect: Shopping cart icon is visible in the header

#### 1.2. Successful login with performance_glitch_user

**File:** `tests/login/successful-login-performance-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'performance_glitch_user' in username field and 'secret_sauce' in password field
    - expect: Credentials are entered successfully
  3. Click Login button
    - expect: Login may be slower than normal but user is redirected to inventory page
    - expect: All expected page elements load correctly

#### 1.3. Successful login with problem_user

**File:** `tests/login/successful-login-problem-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'problem_user' in username field and 'secret_sauce' in password field
    - expect: Credentials are entered successfully
  3. Click Login button
    - expect: User is redirected to inventory page
    - expect: Note: This user may have UI/visual issues but login should succeed

#### 1.4. Successful login with error_user

**File:** `tests/login/successful-login-error-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'error_user' in username field and 'secret_sauce' in password field
    - expect: Credentials are entered successfully
  3. Click Login button
    - expect: User is redirected to inventory page
    - expect: Note: This user may encounter errors in other parts of the application

#### 1.5. Successful login with visual_user

**File:** `tests/login/successful-login-visual-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'visual_user' in username field and 'secret_sauce' in password field
    - expect: Credentials are entered successfully
  3. Click Login button
    - expect: User is redirected to inventory page
    - expect: Note: This user may have visual differences in the UI

### 2. Login Failure Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Login failure with locked out user

**File:** `tests/login/login-failure-locked-user.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'locked_out_user' in the username field
    - expect: Username field accepts the input
  3. Enter 'secret_sauce' in the password field
    - expect: Password field accepts the input
  4. Click the Login button
    - expect: Error message appears: 'Epic sadface: Sorry, this user has been locked out.'
    - expect: User remains on login page
    - expect: URL stays at https://www.saucedemo.com/
    - expect: Error message is displayed prominently with red styling

#### 2.2. Login failure with invalid username

**File:** `tests/login/login-failure-invalid-username.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'invalid_username' in the username field
    - expect: Username field accepts the input
  3. Enter 'secret_sauce' in the password field
    - expect: Password field accepts the input
  4. Click the Login button
    - expect: Error message appears: 'Epic sadface: Username and password do not match any user in this service'
    - expect: User remains on login page
    - expect: Username and password fields remain populated
    - expect: Error message has close button (X) to dismiss

#### 2.3. Login failure with invalid password

**File:** `tests/login/login-failure-invalid-password.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'standard_user' in the username field
    - expect: Username field accepts the input
  3. Enter 'wrong_password' in the password field
    - expect: Password field accepts the input
  4. Click the Login button
    - expect: Error message appears: 'Epic sadface: Username and password do not match any user in this service'
    - expect: User remains on login page
    - expect: Fields retain their values

#### 2.4. Login failure with both invalid credentials

**File:** `tests/login/login-failure-invalid-both.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'invalid_user' in username and 'wrong_password' in password
    - expect: Both fields accept the invalid inputs
  3. Click the Login button
    - expect: Error message appears: 'Epic sadface: Username and password do not match any user in this service'
    - expect: User remains on login page

### 3. Form Validation Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Login validation with empty username field

**File:** `tests/login/validation-empty-username.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Leave username field empty
    - expect: Username field remains empty
  3. Enter 'secret_sauce' in the password field
    - expect: Password field accepts the input
  4. Click the Login button
    - expect: Error message appears: 'Epic sadface: Username is required'
    - expect: User remains on login page
    - expect: Password field retains its value
    - expect: Username field shows validation styling

#### 3.2. Login validation with empty password field

**File:** `tests/login/validation-empty-password.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Enter 'standard_user' in the username field
    - expect: Username field accepts the input
  3. Leave password field empty
    - expect: Password field remains empty
  4. Click the Login button
    - expect: Error message appears: 'Epic sadface: Password is required'
    - expect: User remains on login page
    - expect: Username field retains its value
    - expect: Password field shows validation styling

#### 3.3. Login validation with both fields empty

**File:** `tests/login/validation-both-empty.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Login page loads successfully
  2. Leave both username and password fields empty
    - expect: Both fields remain empty
  3. Click the Login button
    - expect: Error message appears: 'Epic sadface: Username is required'
    - expect: User remains on login page
    - expect: Username validation takes priority over password validation

### 4. UI and UX Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Login page UI elements and layout verification

**File:** `tests/login/ui-elements-verification.spec.ts`

**Steps:**
  1. Navigate to SauceDemo login page
    - expect: Page title is 'Swag Labs'
    - expect: 'Swag Labs' logo is displayed
    - expect: Username field has placeholder or label
    - expect: Password field has placeholder or label
    - expect: Login button is visible and clickable
    - expect: Accepted usernames section lists all valid users
    - expect: Password information section shows 'secret_sauce'
  2. Inspect form elements data attributes
    - expect: Username field has data-test='username' attribute
    - expect: Password field has data-test='password' attribute
    - expect: Login button has data-test='login-button' attribute
  3. Verify responsive design elements
    - expect: Login form is centered and properly styled
    - expect: Error messages appear in consistent location
    - expect: Elements are properly aligned and accessible

#### 4.2. Error message UI behavior

**File:** `tests/login/error-message-ui.spec.ts`

**Steps:**
  1. Trigger any login error (e.g., empty username)
    - expect: Error message appears with proper styling
    - expect: Error has 'Epic sadface:' prefix
    - expect: Error message container has close button (X)
  2. Click the error message close button
    - expect: Error message disappears
    - expect: Form returns to normal state
    - expect: Fields retain their values
  3. Trigger different error to verify consistency
    - expect: New error message appears in same location
    - expect: Styling and behavior is consistent across error types

#### 4.3. Keyboard navigation and accessibility

**File:** `tests/login/keyboard-accessibility.spec.ts`

**Steps:**
  1. Navigate to login page and use Tab key to navigate
    - expect: Tab order: Username → Password → Login button
    - expect: Focus indicators are clearly visible
    - expect: All interactive elements are keyboard accessible
  2. Fill form using keyboard and press Enter in password field
    - expect: Form submits as if Login button was clicked
    - expect: Same validation and behavior as clicking Login button
  3. Use screen reader or accessibility tools
    - expect: Form fields have proper labels for screen readers
    - expect: Error messages are announced by screen readers
    - expect: Page structure is semantically correct

### 5. Cross-Browser and Performance Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Login functionality across different browsers

**File:** `tests/login/cross-browser-compatibility.spec.ts`

**Steps:**
  1. Test successful login in Chrome, Firefox, Safari, and Edge
    - expect: Login works consistently across all browsers
    - expect: UI renders correctly in each browser
    - expect: Performance is acceptable in all browsers
  2. Test error scenarios in different browsers
    - expect: Error messages display consistently
    - expect: Form validation works the same way
    - expect: Styling and layout remain consistent

#### 5.2. Performance testing with performance_glitch_user

**File:** `tests/login/performance-testing.spec.ts`

**Steps:**
  1. Login with performance_glitch_user and measure response time
    - expect: Login request takes longer than normal users
    - expect: Page still loads successfully despite delays
    - expect: User experience degrades gracefully
  2. Compare login times between standard_user and performance_glitch_user
    - expect: Performance difference is measurable
    - expect: Both users eventually succeed
    - expect: No errors occur due to performance issues

#### 5.3. Network conditions testing

**File:** `tests/login/network-conditions.spec.ts`

**Steps:**
  1. Test login under slow network conditions
    - expect: Login still completes successfully
    - expect: Appropriate loading indicators appear
    - expect: Timeout handling works correctly
  2. Test login with intermittent network issues
    - expect: Failed requests are handled gracefully
    - expect: User receives appropriate feedback
    - expect: Retry mechanisms work if implemented

### 6. Security and Edge Case Tests

**Seed:** `tests/seed.spec.ts`

#### 6.1. SQL injection and security testing

**File:** `tests/login/security-testing.spec.ts`

**Steps:**
  1. Attempt SQL injection in username field (e.g., ' OR '1'='1)
    - expect: Application properly escapes/sanitizes input
    - expect: No SQL injection vulnerability exists
    - expect: Appropriate error message or rejection occurs
  2. Test XSS attempts in input fields
    - expect: Script tags and HTML are properly escaped
    - expect: No client-side code execution occurs
    - expect: Input is safely handled
  3. Test maximum length inputs in both fields
    - expect: Fields handle extremely long inputs gracefully
    - expect: No buffer overflow or errors occur
    - expect: Input limits are enforced if applicable

#### 6.2. Special character and internationalization testing

**File:** `tests/login/special-characters.spec.ts`

**Steps:**
  1. Test special characters in username and password fields
    - expect: Special characters are handled properly
    - expect: Unicode characters display correctly
    - expect: No encoding issues occur
  2. Test copy-paste functionality in form fields
    - expect: Copy-paste works correctly in both fields
    - expect: Pasted content is properly validated
    - expect: No formatting issues occur
