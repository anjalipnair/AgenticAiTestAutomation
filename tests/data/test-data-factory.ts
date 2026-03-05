import { LoginTestData } from './login-test-data';
import { TestDataHelper } from './test-helpers';
import { EnvironmentConfig } from './environment-config';

export class TestDataFactory {

  // Create test data for specific test scenarios
  static forSuccessfulLogin() {
    return {
      credentials: LoginTestData.validCredentials,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls,
      performance: LoginTestData.performance,
      environment: EnvironmentConfig.getEnvironmentData()
    };
  }

  static forInvalidLogin() {
    return {
      credentials: LoginTestData.invalidCredentials,
      errorMessages: LoginTestData.errorMessages,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls
    };
  }

  static forFormValidation() {
    return {
      invalidEmails: LoginTestData.invalidEmailFormats,
      emptyFields: LoginTestData.emptyFields,
      boundaryTests: LoginTestData.boundaryTests,
      errorMessages: LoginTestData.errorMessages,
      selectors: LoginTestData.selectors
    };
  }

  static forSecurityTesting() {
    return {
      sqlInjection: LoginTestData.securityPayloads.sqlInjection,
      xssPayloads: LoginTestData.securityPayloads.xssPayloads,
      commandInjection: LoginTestData.securityPayloads.commandInjection,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls
    };
  }

  static forPerformanceTesting() {
    return {
      concurrentUsers: LoginTestData.performanceTests.concurrentUsers,
      loadTestCredentials: LoginTestData.performanceTests.loadTestCredentials,
      thresholds: LoginTestData.performance,
      environmentThresholds: EnvironmentConfig.getPerformanceThresholds()
    };
  }

  static forCrossBrowserTesting() {
    return {
      browsers: LoginTestData.browsers,
      viewports: LoginTestData.viewports,
      credentials: LoginTestData.validCredentials,
      browserSettings: EnvironmentConfig.getBrowserSettings()
    };
  }

  // Create environment-specific test data
  static forEnvironment(env?: string) {
    if (env) {
      process.env.TEST_ENV = env;
    }
    return {
      environment: EnvironmentConfig.getEnvironmentData(),
      baseUrl: EnvironmentConfig.getBaseUrl(),
      timeout: EnvironmentConfig.getTimeout(),
      headless: EnvironmentConfig.getHeadlessMode(),
      performanceThresholds: EnvironmentConfig.getPerformanceThresholds()
    };
  }

  // Create random test data for fuzzing
  static forFuzzTesting(count: number = 100) {
    return Array.from({ length: count }, () => ({
      email: TestDataHelper.generateInvalidEmail(),
      password: Math.random().toString(36).substring(7),
      sqlPayload: TestDataHelper.getRandomSQLInjectionPayload(),
      xssPayload: TestDataHelper.getRandomXSSPayload()
    }));
  }

  // Create test data for specific user types
  static forUserType(userType: 'standard' | 'admin' | 'locked' | 'disabled' | 'premium') {
    const users = EnvironmentConfig.testUsers;
    return {
      user: users[`${userType}User`],
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls,
      errorMessages: LoginTestData.errorMessages
    };
  }

  // Create data-driven test scenarios
  static createParameterizedTests() {
    return TestDataHelper.createDataDrivenTestCases().map(testCase => ({
      ...testCase,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls,
      environment: EnvironmentConfig.getEnvironmentData()
    }));
  }

  // Create test data for mobile testing
  static forMobileTesting() {
    return {
      viewports: {
        mobile: LoginTestData.viewports.mobile,
        smallMobile: LoginTestData.viewports.smallMobile,
        largeMobile: LoginTestData.viewports.largeMobile
      },
      credentials: LoginTestData.validCredentials,
      selectors: {
        ...LoginTestData.selectors,
        // Mobile-specific selectors
        mobileMenuToggle: '.navbar-toggle, .menu-toggle',
        mobileMyAccount: '.mobile-account-menu'
      }
    };
  }

  // Create test data for tablet testing
  static forTabletTesting() {
    return {
      viewport: LoginTestData.viewports.tablet,
      credentials: LoginTestData.validCredentials,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls
    };
  }

  // Create test data for accessibility testing
  static forAccessibilityTesting() {
    return {
      credentials: LoginTestData.validCredentials,
      selectors: {
        ...LoginTestData.selectors,
        // Accessibility-specific selectors
        emailLabel: 'label[for="input-email"]',
        passwordLabel: 'label[for="input-password"]',
        errorAlert: '[role="alert"]',
        mainContent: '[role="main"]'
      },
      accessibilityChecks: [
        'color-contrast',
        'keyboard-navigation',
        'aria-labels',
        'focus-indicators',
        'screen-reader-text'
      ]
    };
  }

  // Create test data for API testing
  static forApiTesting() {
    return {
      credentials: LoginTestData.validCredentials,
      endpoints: EnvironmentConfig.apiEndpoints,
      baseUrl: EnvironmentConfig.getBaseUrl(),
      timeout: EnvironmentConfig.getTimeout(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
  }

  // Create test data for visual regression testing
  static forVisualTesting() {
    return {
      credentials: LoginTestData.validCredentials,
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls,
      viewports: LoginTestData.viewports,
      screenshotOptions: {
        fullPage: true,
        clip: null,
        animations: 'disabled',
        caret: 'hide'
      }
    };
  }

  // Create comprehensive test suite data
  static createFullTestSuite() {
    return {
      positive: this.forSuccessfulLogin(),
      negative: this.forInvalidLogin(),
      validation: this.forFormValidation(),
      security: this.forSecurityTesting(),
      performance: this.forPerformanceTesting(),
      crossBrowser: this.forCrossBrowserTesting(),
      mobile: this.forMobileTesting(),
      accessibility: this.forAccessibilityTesting(),
      api: this.forApiTesting(),
      visual: this.forVisualTesting(),
      environment: this.forEnvironment()
    };
  }

  // Get test data by scenario name
  static getByScenario(scenarioName: string) {
    const scenarios = {
      'successful-login': this.forSuccessfulLogin(),
      'invalid-login': this.forInvalidLogin(),
      'form-validation': this.forFormValidation(),
      'security-testing': this.forSecurityTesting(),
      'performance-testing': this.forPerformanceTesting(),
      'cross-browser': this.forCrossBrowserTesting(),
      'mobile-testing': this.forMobileTesting(),
      'tablet-testing': this.forTabletTesting(),
      'accessibility-testing': this.forAccessibilityTesting(),
      'api-testing': this.forApiTesting(),
      'visual-testing': this.forVisualTesting()
    };

    return scenarios[scenarioName as keyof typeof scenarios] || this.forSuccessfulLogin();
  }

  // Generate test data with custom configuration
  static createCustomTestData(config: {
    credentialsType?: 'valid' | 'invalid' | 'boundary' | 'security';
    environment?: string;
    browserType?: string;
    viewport?: string;
    includePerformance?: boolean;
    includeSecurity?: boolean;
  }) {
    const {
      credentialsType = 'valid',
      environment = 'demo',
      browserType = 'chrome',
      viewport = 'desktop',
      includePerformance = false,
      includeSecurity = false
    } = config;

    const testData: any = {
      credentials: TestDataHelper.createCredentialsWithPattern(credentialsType),
      selectors: LoginTestData.selectors,
      urls: LoginTestData.urls,
      environment: this.forEnvironment(environment),
      browser: TestDataHelper.getBrowserTestData(browserType),
      viewport: TestDataHelper.getViewportTestData(viewport)
    };

    if (includePerformance) {
      testData.performance = this.forPerformanceTesting();
    }

    if (includeSecurity) {
      testData.security = this.forSecurityTesting();
    }

    return testData;
  }
}