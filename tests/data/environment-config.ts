export const EnvironmentConfig = {
  
  // Test environments
  environments: {
    demo: {
      baseUrl: 'https://demo.opencart.com',
      credentials: {
        email: 'demo@opencart.com',
        password: 'demo'
      },
      timeout: 30000,
      headless: true
    },
    staging: {
      baseUrl: 'https://staging.opencart.com',
      credentials: {
        email: 'staging@test.com', 
        password: 'staging123'
      },
      timeout: 15000,
      headless: false
    },
    local: {
      baseUrl: 'http://localhost:8080',
      credentials: {
        email: 'admin@localhost.com',
        password: 'admin123'
      },
      timeout: 10000,
      headless: false
    },
    production: {
      baseUrl: 'https://opencart.com',
      credentials: {
        email: 'prod@opencart.com',
        password: 'prod123'
      },
      timeout: 45000,
      headless: true
    }
  },

  // Get environment-specific data
  getEnvironmentData(): any {
    const env = process.env.TEST_ENV || 'demo';
    return this.environments[env as keyof typeof this.environments] || this.environments.demo;
  },

  // Get base URL for current environment
  getBaseUrl(): string {
    return this.getEnvironmentData().baseUrl;
  },

  // Get timeout for current environment
  getTimeout(): number {
    return this.getEnvironmentData().timeout;
  },

  // Get headless setting for current environment
  getHeadlessMode(): boolean {
    return this.getEnvironmentData().headless;
  },

  // Database test users (if available)
  testUsers: {
    standardUser: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@test.com',
      password: 'password123',
      telephone: '123-456-7890',
      address: {
        firstName: 'John',
        lastName: 'Doe',
        company: 'Test Company',
        address1: '123 Test Street',
        address2: 'Apt 456',
        city: 'Test City',
        postCode: '12345',
        country: 'United States',
        zone: 'Alabama'
      }
    },
    adminUser: {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@opencart.com',
      password: 'admin123',
      role: 'administrator',
      permissions: ['read', 'write', 'delete', 'admin']
    },
    lockedUser: {
      firstName: 'Locked',
      lastName: 'User', 
      email: 'locked@test.com',
      password: 'locked123',
      status: 'locked',
      lockReason: 'Multiple failed login attempts'
    },
    disabledUser: {
      firstName: 'Disabled',
      lastName: 'User',
      email: 'disabled@test.com', 
      password: 'disabled123',
      status: 'disabled',
      disableReason: 'Account suspended'
    },
    premiumUser: {
      firstName: 'Premium',
      lastName: 'Customer',
      email: 'premium@test.com',
      password: 'premium123',
      tier: 'premium',
      benefits: ['free-shipping', 'priority-support', 'exclusive-deals']
    }
  },

  // API endpoints
  apiEndpoints: {
    login: '/api/login',
    logout: '/api/logout',
    register: '/api/register',
    profile: '/api/profile',
    passwordReset: '/api/password-reset',
    userValidation: '/api/validate-user'
  },

  // Test data cleanup configuration
  cleanup: {
    deleteTestUsers: true,
    clearCookies: true,
    clearLocalStorage: true,
    resetDatabase: false // Only for local/staging
  },

  // Browser configurations per environment
  browserSettings: {
    demo: {
      defaultBrowser: 'chromium',
      headless: true,
      slowMo: 0,
      video: false,
      screenshot: 'only-on-failure'
    },
    staging: {
      defaultBrowser: 'chromium',
      headless: false,
      slowMo: 100,
      video: true,
      screenshot: 'on'
    },
    local: {
      defaultBrowser: 'chromium',
      headless: false,
      slowMo: 500,
      video: true,
      screenshot: 'on'
    }
  },

  // Get browser settings for current environment
  getBrowserSettings() {
    const env = process.env.TEST_ENV || 'demo';
    return this.browserSettings[env as keyof typeof this.browserSettings] || this.browserSettings.demo;
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    logToFile: true,
    logDirectory: './test-results/logs',
    maxLogFiles: 10
  },

  // Test reporting configuration
  reporting: {
    outputDir: './test-results',
    reportFormat: ['html', 'json', 'junit'],
    includeScreenshots: true,
    includeVideos: true,
    includeTraces: true
  },

  // Performance thresholds per environment
  performanceThresholds: {
    demo: {
      pageLoad: 5000,
      apiResponse: 3000,
      elementLoad: 2000
    },
    staging: {
      pageLoad: 3000,
      apiResponse: 2000,
      elementLoad: 1500
    },
    local: {
      pageLoad: 2000,
      apiResponse: 1000,
      elementLoad: 1000
    }
  },

  // Get performance thresholds for current environment
  getPerformanceThresholds() {
    const env = process.env.TEST_ENV || 'demo';
    return this.performanceThresholds[env as keyof typeof this.performanceThresholds] || this.performanceThresholds.demo;
  },

  // CI/CD specific configurations
  ciConfig: {
    // GitHub Actions configuration
    github: {
      scheduledRuns: {
        cron: '0 8 * * *', // Daily at 8:00 AM UTC
        timezone: 'UTC',
        environments: ['demo', 'staging'],
        browsers: ['chromium', 'firefox', 'webkit']
      },
      notifications: {
        slack: {
          enabled: process.env.SLACK_NOTIFICATIONS_ENABLED === 'true',
          channel: '#test-automation',
          onFailure: true,
          onSuccess: false,
          onScheduled: true
        },
        email: {
          enabled: process.env.EMAIL_NOTIFICATIONS_ENABLED === 'true',
          recipients: process.env.NOTIFICATION_EMAILS?.split(',') || [],
          onFailure: true
        }
      },
      artifacts: {
        retentionDays: 30,
        includeScreenshots: true,
        includeVideos: true,
        includeTraces: true,
        includeReports: true
      }
    },
    
    // Docker configuration for containerized testing
    docker: {
      image: 'mcr.microsoft.com/playwright:v1.40.0-focal',
      workdir: '/app',
      volumes: [
        './:/app',
        './test-results:/app/test-results'
      ],
      environment: {
        CI: 'true',
        DISPLAY: ':99'
      }
    },
    
    // Test execution matrix
    testMatrix: {
      environments: ['demo', 'staging'],
      browsers: ['chromium', 'firefox', 'webkit'],
      testSuites: {
        smoke: ['tests/login/successful-login.spec.ts'],
        regression: ['tests/**/*.spec.ts'],
        security: ['tests/login/successful-login.spec.ts --grep="security|injection|xss"'],
        performance: ['tests/login/successful-login.spec.ts --grep="performance|timing"']
      }
    },
    
    // Parallel execution settings
    parallelExecution: {
      maxWorkers: process.env.CI ? 2 : 4,
      retries: process.env.CI ? 2 : 0,
      timeout: 30000,
      failFast: false
    }
  },

  // Get CI-specific configuration
  getCIConfig() {
    return this.ciConfig;
  },

  // Get Docker configuration
  getDockerConfig() {
    return this.ciConfig.docker;
  },

  // Get test matrix for CI
  getTestMatrix() {
    return this.ciConfig.testMatrix;
  },

  // Check if running in CI environment
  isCI() {
    return process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
  },

  // Get notification settings
  getNotificationConfig() {
    return this.ciConfig.github.notifications;
  }
};