// Import for local use in helper functions
import { LoginTestData } from './login-test-data';
import { TestDataHelper } from './test-helpers';
import { EnvironmentConfig } from './environment-config';
import { TestDataFactory } from './test-data-factory';

// Main test data exports
export { LoginTestData } from './login-test-data';
export { TestDataHelper } from './test-helpers';
export { EnvironmentConfig } from './environment-config';
export { TestDataFactory } from './test-data-factory';

// Type definitions for better TypeScript support
export interface Credentials {
  email: string;
  password: string;
}

export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  telephone?: string;
  status?: string;
  role?: string;
}

export interface TestEnvironment {
  baseUrl: string;
  credentials: Credentials;
  timeout: number;
  headless: boolean;
}

export interface BrowserConfig {
  name: string;
  viewport: {
    width: number;
    height: number;
  };
  userAgent: string;
}

export interface TestScenario {
  scenario: string;
  credentials: Credentials;
  expectedResult: string;
  expectedError?: string;
}

// Utility function to get all test data at once
export function getAllTestData() {
  return {
    loginData: LoginTestData,
    helpers: TestDataHelper,
    environment: EnvironmentConfig,
    factory: TestDataFactory
  };
}

// Quick access functions for common test data
export const getValidCredentials = () => LoginTestData.validCredentials;
export const getInvalidCredentials = () => LoginTestData.invalidCredentials;
export const getSelectors = () => LoginTestData.selectors;
export const getUrls = () => LoginTestData.urls;
export const getErrorMessages = () => LoginTestData.errorMessages;

// Environment helpers
export const getCurrentEnvironment = () => EnvironmentConfig.getEnvironmentData();
export const getBaseUrl = () => EnvironmentConfig.getBaseUrl();
export const getTimeout = () => EnvironmentConfig.getTimeout();

// Quick test data generators
export const generateTestUser = () => TestDataHelper.generateUserProfile();
export const generateValidLogin = () => TestDataHelper.generateValidCredentials();
export const getRandomInvalidEmail = () => TestDataHelper.generateInvalidEmail();

// Factory shortcuts
export const createLoginTestData = () => TestDataFactory.forSuccessfulLogin();
export const createSecurityTestData = () => TestDataFactory.forSecurityTesting();
export const createMobileTestData = () => TestDataFactory.forMobileTesting();
export const createPerformanceTestData = () => TestDataFactory.forPerformanceTesting();