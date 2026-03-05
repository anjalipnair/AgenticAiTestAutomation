# Test Data Documentation

This directory contains comprehensive test data for OpenCart login functionality testing.

## 📁 File Structure

```
tests/data/
├── index.ts                 # Main exports and utility functions
├── login-test-data.ts       # Core test data constants
├── test-helpers.ts          # Utility functions and generators
├── environment-config.ts    # Environment-specific configurations
└── test-data-factory.ts     # Factory pattern for creating test data
```

## 🚀 Quick Start

### Import all test data utilities:
```typescript
import { 
  TestDataFactory, 
  getValidCredentials, 
  getSelectors, 
  getUrls 
} from '../data';
```

### Get test data for specific scenarios:
```typescript
// For successful login tests
const loginData = TestDataFactory.forSuccessfulLogin();

// For security testing
const securityData = TestDataFactory.forSecurityTesting();

// For mobile testing
const mobileData = TestDataFactory.forMobileTesting();
```

## 📊 Available Test Data

### 1. Valid Credentials
```typescript
const validCreds = getValidCredentials();
// Returns: { email: 'demo@opencart.com', password: 'demo123' }
```

### 2. Invalid Credentials
```typescript
const testData = TestDataFactory.forInvalidLogin();
// Includes: wrongEmail, wrongPassword, bothWrong scenarios
```

### 3. Form Validation Data
```typescript
const validationData = TestDataFactory.forFormValidation();
// Includes: invalidEmails, emptyFields, boundaryTests
```

### 4. Security Test Payloads
```typescript
const securityData = TestDataFactory.forSecurityTesting();
// Includes: SQL injection, XSS, command injection payloads
```

### 5. Performance Test Data
```typescript
const perfData = TestDataFactory.forPerformanceTesting();
// Includes: concurrent users, load test credentials, thresholds
```

### 6. Cross-Browser Data
```typescript
const browserData = TestDataFactory.forCrossBrowserTesting();
// Includes: Chrome, Firefox, Safari configurations
```

## 🎯 Usage Examples

### Example 1: Basic Login Test
```typescript
import { test, expect } from '@playwright/test';
import { TestDataFactory, getSelectors } from '../data';

test('successful login', async ({ page }) => {
  const testData = TestDataFactory.forSuccessfulLogin();
  const selectors = getSelectors();
  
  await page.goto(testData.urls.homepage);
  await page.locator(selectors.emailField).fill(testData.credentials.email);
  await page.locator(selectors.passwordField).fill(testData.credentials.password);
  await page.locator(selectors.loginButton).click();
  
  await expect(page).toHaveURL(/.*account.*/);
});
```

### Example 2: Data-Driven Testing
```typescript
import { TestDataHelper } from '../data';

const testCases = TestDataHelper.createDataDrivenTestCases();

for (const testCase of testCases) {
  test(`Login test: ${testCase.scenario}`, async ({ page }) => {
    // Use testCase.credentials, testCase.expectedResult, etc.
  });
}
```

### Example 3: Environment-Specific Testing
```typescript
import { TestDataFactory } from '../data';

test('login in staging environment', async ({ page }) => {
  const envData = TestDataFactory.forEnvironment('staging');
  
  await page.goto(envData.baseUrl);
  // Use environment-specific credentials and settings
});
```

### Example 4: Security Testing
```typescript
import { TestDataFactory, TestDataHelper } from '../data';

test('SQL injection prevention', async ({ page }) => {
  const securityData = TestDataFactory.forSecurityTesting();
  const sqlPayload = TestDataHelper.getRandomSQLInjectionPayload();
  
  await page.goto('https://demo.opencart.com');
  await page.locator('input[name="email"]').fill(sqlPayload);
  // Verify application handles malicious input safely
});
```

### Example 5: Mobile Testing
```typescript
import { TestDataFactory } from '../data';

test('mobile login', async ({ page }) => {
  const mobileData = TestDataFactory.forMobileTesting();
  
  await page.setViewportSize(mobileData.viewports.mobile);
  // Test mobile-specific functionality
});
```

## 🔧 Helper Functions

### Generate Random Data
```typescript
import { TestDataHelper } from '../data';

// Generate random valid credentials
const randomCreds = TestDataHelper.generateValidCredentials();

// Generate random user profile
const userProfile = TestDataHelper.generateUserProfile();

// Get random security payload
const xssPayload = TestDataHelper.getRandomXSSPayload();
```

### Environment Management
```typescript
import { EnvironmentConfig } from '../data';

// Get current environment data
const envData = EnvironmentConfig.getEnvironmentData();

// Get environment-specific URL
const baseUrl = EnvironmentConfig.getBaseUrl();

// Get performance thresholds
const thresholds = EnvironmentConfig.getPerformanceThresholds();
```

### Custom Test Data Creation
```typescript
import { TestDataFactory } from '../data';

const customData = TestDataFactory.createCustomTestData({
  credentialsType: 'security',
  environment: 'staging',
  browserType: 'firefox',
  viewport: 'mobile',
  includePerformance: true,
  includeSecurity: true
});
```

## 🌍 Environment Configuration

Set the test environment using the `TEST_ENV` environment variable:

```bash
# Run tests in demo environment (default)
npm test

# Run tests in staging environment
TEST_ENV=staging npm test

# Run tests in local environment  
TEST_ENV=local npm test
```

## 📝 Adding New Test Data

### 1. Add to Core Data
Edit `login-test-data.ts` to add new constants:
```typescript
export const LoginTestData = {
  // Add new test data categories here
  newCategory: {
    // Your new test data
  }
};
```

### 2. Add Helper Functions
Edit `test-helpers.ts` to add new utility functions:
```typescript
export class TestDataHelper {
  static newHelperFunction() {
    // Your new helper logic
  }
}
```

### 3. Add Factory Methods
Edit `test-data-factory.ts` to add new factory methods:
```typescript
export class TestDataFactory {
  static forNewScenario() {
    return {
      // Return structured test data for new scenario
    };
  }
}
```

### 4. Update Exports
Add new exports to `index.ts`:
```typescript
export const getNewTestData = () => TestDataFactory.forNewScenario();
```

## 🧪 Test Data Categories

| Category | Purpose | File Location |
|----------|---------|---------------|
| **Valid Credentials** | Successful login tests | `login-test-data.ts` |
| **Invalid Credentials** | Negative testing | `login-test-data.ts` |
| **Form Validation** | Input validation tests | `login-test-data.ts` |
| **Security Payloads** | Security testing | `login-test-data.ts` |
| **Performance Data** | Load/stress testing | `login-test-data.ts` |
| **Browser Configs** | Cross-browser testing | `login-test-data.ts` |
| **Environment Settings** | Multi-environment support | `environment-config.ts` |
| **User Profiles** | Different user types | `environment-config.ts` |
| **Helper Functions** | Utilities and generators | `test-helpers.ts` |
| **Factory Methods** | Structured data creation | `test-data-factory.ts` |

## 🔒 Security Considerations

- **SQL Injection Payloads**: Used for testing input sanitization
- **XSS Payloads**: Used for testing output encoding
- **Command Injection**: Used for testing system command prevention
- **Test Data Isolation**: Each test uses isolated data
- **Credential Management**: Test credentials are separate from production

## 📊 Performance Data

- **Page Load Thresholds**: 3 seconds (demo), 2 seconds (local)
- **API Response Thresholds**: 2 seconds (demo), 1 second (local)  
- **Element Load Thresholds**: 2 seconds (demo), 1 second (local)
- **Concurrent User Simulation**: Up to 50 simultaneous users
- **Load Test Duration**: Configurable per environment

## 📱 Device & Browser Support

### Browsers
- **Chrome**: Latest version with custom user agent
- **Firefox**: Latest version with custom settings
- **Safari/WebKit**: macOS compatibility testing

### Viewports
- **Mobile**: 375x667 (iPhone-like)
- **Tablet**: 768x1024 (iPad-like)  
- **Desktop**: 1920x1080 (Standard desktop)
- **Small Mobile**: 320x568 (Older phones)
- **Large Mobile**: 414x896 (iPhone Plus-like)

This test data structure provides comprehensive coverage for all OpenCart login testing scenarios while maintaining flexibility and maintainability.