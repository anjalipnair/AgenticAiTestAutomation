import { LoginTestData } from './login-test-data';

export class TestDataHelper {
  
  // Generate random valid credentials
  static generateValidCredentials() {
    const timestamp = Date.now();
    return {
      email: `test${timestamp}@opencart.com`,
      password: `password${timestamp}`
    };
  }

  // Generate random invalid email
  static generateInvalidEmail() {
    const invalidFormats = LoginTestData.invalidEmailFormats;
    return invalidFormats[Math.floor(Math.random() * invalidFormats.length)];
  }

  // Get random SQL injection payload
  static getRandomSQLInjectionPayload() {
    const payloads = LoginTestData.securityPayloads.sqlInjection;
    return payloads[Math.floor(Math.random() * payloads.length)];
  }

  // Get random XSS payload
  static getRandomXSSPayload() {
    const payloads = LoginTestData.securityPayloads.xssPayloads;
    return payloads[Math.floor(Math.random() * payloads.length)];
  }

  // Generate credentials for concurrent testing
  static generateConcurrentCredentials(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      email: `concurrent${i}@test.com`,
      password: `password${i}`
    }));
  }

  // Create test data for data-driven tests
  static createDataDrivenTestCases() {
    return [
      {
        scenario: 'Valid credentials',
        credentials: LoginTestData.validCredentials,
        expectedResult: 'success'
      },
      {
        scenario: 'Wrong email',
        credentials: LoginTestData.invalidCredentials.wrongEmail,
        expectedResult: 'error',
        expectedError: LoginTestData.errorMessages.invalidCredentials
      },
      {
        scenario: 'Wrong password', 
        credentials: LoginTestData.invalidCredentials.wrongPassword,
        expectedResult: 'error',
        expectedError: LoginTestData.errorMessages.invalidCredentials
      },
      {
        scenario: 'Empty fields',
        credentials: LoginTestData.emptyFields.bothEmpty,
        expectedResult: 'validation_error'
      }
    ];
  }

  // Get browser-specific test data
  static getBrowserTestData(browserName: string) {
    return LoginTestData.browsers[browserName] || LoginTestData.browsers.chrome;
  }

  // Get viewport-specific test data
  static getViewportTestData(deviceType: string) {
    return LoginTestData.viewports[deviceType] || LoginTestData.viewports.desktop;
  }

  // Generate realistic test user data
  static generateUserProfile() {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'Chris', 'Lisa'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const timestamp = Date.now();

    return {
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestamp}@test.com`,
      password: `Password${timestamp}!`,
      telephone: this.generatePhoneNumber(),
      dateOfBirth: this.generateDateOfBirth()
    };
  }

  // Generate phone number
  private static generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const exchange = Math.floor(Math.random() * 900) + 100;
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `${areaCode}-${exchange}-${number}`;
  }

  // Generate date of birth (18-65 years old)
  private static generateDateOfBirth() {
    const currentYear = new Date().getFullYear();
    const minAge = 18;
    const maxAge = 65;
    
    const birthYear = currentYear - Math.floor(Math.random() * (maxAge - minAge + 1)) - minAge;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // Using 28 to avoid month-specific day issues
    
    return `${birthYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  // Create test credentials with specific patterns
  static createCredentialsWithPattern(pattern: 'valid' | 'invalid' | 'boundary' | 'security') {
    switch (pattern) {
      case 'valid':
        return this.generateValidCredentials();
      
      case 'invalid':
        return {
          email: this.generateInvalidEmail(),
          password: 'invalidpassword'
        };
      
      case 'boundary':
        return {
          email: LoginTestData.boundaryTests.longEmail.email,
          password: LoginTestData.boundaryTests.longPassword.password
        };
      
      case 'security':
        return {
          email: this.getRandomSQLInjectionPayload(),
          password: this.getRandomXSSPayload()
        };
      
      default:
        return this.generateValidCredentials();
    }
  }

  // Validate email format
  static isValidEmailFormat(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Generate test data for specific test scenarios
  static getTestDataForScenario(scenario: string) {
    const scenarioMap = {
      'successful-login': LoginTestData.validCredentials,
      'invalid-email': LoginTestData.invalidCredentials.wrongEmail,
      'invalid-password': LoginTestData.invalidCredentials.wrongPassword,
      'empty-fields': LoginTestData.emptyFields.bothEmpty,
      'sql-injection': {
        email: this.getRandomSQLInjectionPayload(),
        password: 'password123'
      },
      'xss-attack': {
        email: 'test@example.com',
        password: this.getRandomXSSPayload()
      },
      'boundary-test': LoginTestData.boundaryTests.longEmail
    };

    return scenarioMap[scenario] || LoginTestData.validCredentials;
  }
}