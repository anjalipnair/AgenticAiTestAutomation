export const LoginTestData = {
  // Valid credentials for successful login tests
  validCredentials: {
    email: 'demo@opencart.com',
    password: 'demo123',
    alternateEmail: 'test@opencart.com', 
    alternatePassword: 'password123'
  },

  // Invalid credentials for negative testing
  invalidCredentials: {
    wrongEmail: {
      email: 'nonexistent@test.com',
      password: 'demo123'
    },
    wrongPassword: {
      email: 'demo@opencart.com',
      password: 'wrongpassword123'
    },
    bothWrong: {
      email: 'wrong@test.com',
      password: 'wrongpassword'
    }
  },

  // Email format validation test cases
  invalidEmailFormats: [
    'invalid-email',           // Missing @
    'test@',                  // Missing domain
    '@domain.com',            // Missing username  
    'test.domain.com',        // Missing @
    'test@domain',            // Missing TLD
    'test@@domain.com',       // Double @
    'test@.com',             // Missing domain name
    'test@domain.',          // Missing TLD
    ' test@domain.com',      // Leading space
    'test@domain.com ',      // Trailing space
    'test..test@domain.com', // Double dots
    'test@domain..com'       // Double dots in domain
  ],

  // Empty field test cases
  emptyFields: {
    bothEmpty: { email: '', password: '' },
    emptyEmail: { email: '', password: 'password123' },
    emptyPassword: { email: 'test@opencart.com', password: '' },
    whitespaceEmail: { email: '   ', password: 'password123' },
    whitespacePassword: { email: 'test@opencart.com', password: '   ' }
  },

  // Boundary and limit testing
  boundaryTests: {
    longEmail: {
      email: 'a'.repeat(100) + '@' + 'b'.repeat(100) + '.com',
      password: 'password123'
    },
    longPassword: {
      email: 'test@opencart.com',
      password: 'p'.repeat(500)
    },
    maxLengthEmail: {
      email: 'test' + 'x'.repeat(250) + '@domain.com',
      password: 'password123'  
    },
    specialCharacters: {
      email: 'test+special.chars_123@domain-name.co.uk',
      password: 'Pass@123!#$%^&*()'
    },
    unicodeCharacters: {
      email: 'tëst@dömaín.cöm',
      password: 'pássWörd123'
    },
    minLengthPassword: {
      email: 'test@opencart.com',
      password: '1'
    }
  },

  // Security test payloads
  securityPayloads: {
    sqlInjection: [
      "' OR '1'='1' --",
      "'; DROP TABLE users; --", 
      "' UNION SELECT * FROM admin --",
      "admin'--",
      "admin' #",
      "admin'/*",
      "' or 1=1#",
      "' or 1=1--",
      "' or 1=1/*",
      ") or '1'='1--",
      ") or ('1'='1--"
    ],
    xssPayloads: [
      "<script>alert('XSS')</script>",
      "<img src=x onerror=alert('XSS')>",
      "javascript:alert('XSS')",
      "<svg onload=alert('XSS')>",
      "';alert(String.fromCharCode(88,83,83))//';alert(String.fromCharCode(88,83,83))//",
      "\";alert('XSS');//",
      "<iframe src=\"javascript:alert('XSS')\">",
      "<body onload=alert('XSS')>",
      "<input onfocus=alert('XSS') autofocus>",
      "<select onfocus=alert('XSS') autofocus>"
    ],
    commandInjection: [
      "; ls -la",
      "| whoami", 
      "&& cat /etc/passwd",
      "`rm -rf /`",
      "$(cat /etc/passwd)",
      "; ping google.com"
    ]
  },

  // Performance test data
  performanceTests: {
    concurrentUsers: [
      { email: `user1@test.com`, password: 'password123' },
      { email: `user2@test.com`, password: 'password123' },
      { email: `user3@test.com`, password: 'password123' },
      { email: `user4@test.com`, password: 'password123' },
      { email: `user5@test.com`, password: 'password123' }
    ],
    loadTestCredentials: Array.from({ length: 50 }, (_, i) => ({
      email: `loadtest${i}@opencart.com`,
      password: `loadpass${i}`
    }))
  },

  // Expected error messages
  errorMessages: {
    invalidCredentials: 'Warning: No match for E-Mail Address and/or Password.',
    emailRequired: 'E-Mail Address must be between 1 and 96 characters!',
    passwordRequired: 'Password must be between 1 and 20 characters!',
    invalidEmailFormat: 'E-Mail Address does not appear to be valid!',
    accountLocked: 'Warning: Your account has been locked after 5 failed login attempts.',
    accountDisabled: 'Warning: This account is currently disabled.'
  },

  // URLs and selectors
  urls: {
    homepage: 'https://demo.opencart.com',
    loginPage: 'https://demo.opencart.com/index.php?route=account/login',
    accountDashboard: 'https://demo.opencart.com/index.php?route=account/account',
    forgotPassword: 'https://demo.opencart.com/index.php?route=account/forgotten'
  },

  // Page selectors
  selectors: {
    myAccountDropdown: 'a:has-text("My Account")',
    loginLink: 'a:has-text("Login")',
    emailField: 'input[name="email"]',
    passwordField: 'input[name="password"]', 
    loginButton: 'input[value="Login"]',
    rememberMeCheckbox: 'input[name="remember"]',
    forgotPasswordLink: 'a:has-text("Forgotten Password")',
    errorMessage: '.alert-danger',
    successMessage: '.alert-success',
    accountHeading: 'h1:has-text("My Account")',
    logoutLink: 'a:has-text("Logout")'
  },

  // Browser configurations for cross-browser testing
  browsers: {
    chrome: {
      name: 'chrome',
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    firefox: {
      name: 'firefox', 
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0'
    },
    safari: {
      name: 'webkit',
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15'
    }
  },

  // Mobile and tablet viewports
  viewports: {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1920, height: 1080 },
    smallMobile: { width: 320, height: 568 },
    largeMobile: { width: 414, height: 896 }
  },

  // Timeouts and performance thresholds
  performance: {
    pageLoadTimeout: 3000,    // 3 seconds
    loginResponseTimeout: 2000, // 2 seconds
    elementTimeout: 5000,     // 5 seconds
    networkTimeout: 10000     // 10 seconds
  }
};