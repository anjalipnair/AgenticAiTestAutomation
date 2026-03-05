# 🚀 CI/CD Pipeline Documentation

This document provides comprehensive information about the CI/CD pipeline setup for OpenCart Test Automation.

## 📋 Table of Contents

- [Overview](#overview)
- [Scheduled Tests](#scheduled-tests)
- [Workflow Triggers](#workflow-triggers)
- [Environment Setup](#environment-setup)
- [Docker Configuration](#docker-configuration)
- [Test Commands](#test-commands)
- [Notifications](#notifications)
- [Monitoring & Reporting](#monitoring--reporting)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The CI/CD pipeline provides:

- **📅 Scheduled Daily Tests**: Automated test execution every day at 8:00 AM UTC
- **🔄 Pull Request Validation**: Automatic smoke tests on PR creation
- **🌐 Multi-Environment Testing**: Support for demo, staging, local, and production environments
- **🧪 Cross-Browser Testing**: Chrome, Firefox, and Safari/WebKit compatibility
- **📊 Comprehensive Reporting**: HTML reports, artifacts, and dashboard
- **🔔 Smart Notifications**: Slack and email alerts on failures
- **🐳 Containerized Testing**: Docker support for consistent environments

## ⏰ Scheduled Tests

### Daily Test Schedule

```yaml
# Runs every day at 8:00 AM UTC
schedule:
  - cron: '0 8 * * *'
```

### What Gets Tested Daily:

| Environment | Browsers | Test Suites |
|-------------|----------|-------------|
| Demo | Chromium, Firefox, WebKit | Full regression suite |
| Staging | Chromium, Firefox, WebKit | Full regression suite |

### Test Matrix:

```yaml
matrix:
  environment: [demo, staging]
  browser: [chromium, firefox, webkit]
```

## 🔄 Workflow Triggers

### 1. Scheduled Execution
- **When**: Daily at 8:00 AM UTC
- **What**: Full test suite across all environments and browsers
- **Artifacts**: Retained for 30 days

### 2. Pull Request Tests
- **When**: PR created or updated
- **What**: Smoke tests (login functionality only)
- **Browser**: Chromium only (for speed)
- **Artifacts**: Retained for 7 days

### 3. Manual Execution
```bash
# Trigger via GitHub Actions UI
# Choose environment, browser, and test suite
```

### 4. Push to Main Branch
- **When**: Code pushed to main branch
- **What**: Full test suite
- **Purpose**: Deployment validation

## 🌍 Environment Setup

### Available Environments:

1. **Demo Environment** (Default)
   - URL: `https://demo.opencart.com`
   - Used for: Daily scheduled tests
   - Timeout: 30 seconds
   - Headless: true

2. **Staging Environment**
   - URL: `https://staging.opencart.com`
   - Used for: Pre-production testing
   - Timeout: 15 seconds
   - Headless: false

3. **Local Environment**
   - URL: `http://localhost:8080`
   - Used for: Development testing
   - Timeout: 10 seconds
   - Headless: false

4. **Production Environment**
   - URL: `https://opencart.com`
   - Used for: Production validation
   - Timeout: 45 seconds
   - Headless: true

### Environment Configuration:

```bash
# Set environment via TEST_ENV variable
export TEST_ENV=demo    # Default
export TEST_ENV=staging
export TEST_ENV=local
export TEST_ENV=production
```

## 🐳 Docker Configuration

### Docker Compose Services:

```yaml
services:
  playwright-tests:     # Main test service
  demo-tests:          # Demo environment specific
  staging-tests:       # Staging environment specific
  security-tests:      # Security test suite
  performance-tests:   # Performance test suite
  chromium-tests:      # Chromium browser only
  firefox-tests:       # Firefox browser only
  webkit-tests:        # WebKit browser only
  report-server:       # Test report web server
```

### Docker Commands:

```bash
# Build and run all tests
docker-compose up playwright-tests

# Run environment-specific tests
docker-compose up demo-tests
docker-compose up staging-tests

# Run security tests
docker-compose up security-tests

# Run performance tests
docker-compose up performance-tests

# Cross-browser testing
docker-compose up chromium-tests firefox-tests webkit-tests

# Start report server
docker-compose up report-server
# Access at: http://localhost:9323
```

### Local Docker Development:

```bash
# Build the Docker image
docker build -t opencart-tests .

# Run interactive container
docker run -it --rm -v $(pwd):/app opencart-tests bash

# Run specific test
docker run --rm -v $(pwd):/app opencart-tests npm run test:demo
```

## 🧪 Test Commands

### Basic Test Execution:

```bash
# Run all tests
npm test

# Run with browser visible
npm run test:headed

# Interactive test mode
npm run test:ui

# View test report
npm run report
```

### Environment-Specific Tests:

```bash
# Demo environment (default)
npm run test:demo

# Staging environment
npm run test:staging

# Local development
npm run test:local

# Production environment
npm run test:production
```

### Test Suite Execution:

```bash
# Login functionality only
npm run test:login

# Security tests (SQL injection, XSS, etc.)
npm run test:security

# Performance tests
npm run test:performance

# Smoke tests (quick validation)
npm run test:smoke
```

### Browser-Specific Tests:

```bash
# Chrome/Chromium only
npm run test:chromium

# Firefox only
npm run test:firefox

# Safari/WebKit only
npm run test:webkit

# All browsers sequentially
npm run test:cross-browser
```

### Execution Control:

```bash
# Parallel execution (4 workers)
npm run test:parallel

# Serial execution (1 worker)
npm run test:serial

# CI mode with reports
npm run test:ci
```

### Docker Test Commands:

```bash
# Docker-based testing
npm run test:docker

# Environment-specific Docker tests
npm run test:docker-demo
npm run test:docker-staging

# Security tests in Docker
npm run test:docker-security

# Performance tests in Docker
npm run test:docker-performance

# Cross-browser Docker tests
npm run test:docker-cross-browser

# Serve reports from Docker
npm run report:serve
```

### Utility Commands:

```bash
# Install Playwright browsers
npm run install:browsers

# Generate test code
npm run codegen

# View trace files
npm run trace

# Lint test files
npm run lint:tests

# Format test files
npm run format:tests

# Clean report directories
npm run clean:reports

# Setup CI environment
npm run setup:ci
```

## 🔔 Notifications

### Slack Integration:

Enable Slack notifications by setting repository variables:

```yaml
# Repository Variables
SLACK_NOTIFICATIONS_ENABLED=true

# Repository Secrets
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### Slack Notification Triggers:
- ✅ **Test Failures**: Immediate notification with failure details
- 📅 **Scheduled Test Completion**: Daily summary at 8:15 AM UTC
- 🔄 **Manual Test Runs**: On-demand execution notifications

### Email Integration:

Enable email notifications:

```yaml
# Repository Variables
EMAIL_NOTIFICATIONS_ENABLED=true
NOTIFICATION_EMAILS=team@company.com,qa@company.com
```

### Notification Content:
- 📊 **Test Results Summary**: Pass/fail counts, execution time
- 🔗 **Quick Links**: Direct links to test reports and Jira issues
- 🌐 **Environment Details**: Which environments were tested
- 📱 **Browser Coverage**: Cross-browser test results

## 📊 Monitoring & Reporting

### Test Dashboard:

Access the live test dashboard at:
```
https://yourusername.github.io/AgenticAiTestAutomation/
```

### Dashboard Features:
- 📈 **Real-time Test Metrics**: Pass rates, execution trends
- 🎯 **Coverage Statistics**: 20 scenarios, 6 test suites, 100% automation
- 🌐 **Cross-Browser Results**: Chrome, Firefox, Safari compatibility
- ⚡ **Performance Metrics**: Page load times, response times
- 🔍 **Historical Data**: 30-day test history and trends

### Report Artifacts:

Each test run generates:

1. **HTML Report** (`playwright-report/`)
   - Interactive web-based report
   - Screenshots on failures
   - Video recordings (if enabled)
   - Test traces for debugging

2. **JSON Report** (`results.json`)
   - Machine-readable test results
   - Suitable for integration with other tools

3. **JUnit Report** (`junit-results.xml`)
   - Compatible with CI/CD tools
   - Test case details and timings

### Report Retention:
- **Scheduled Tests**: 30 days
- **PR Tests**: 7 days
- **Manual Tests**: 30 days

## 🛠️ Troubleshooting

### Common Issues:

#### 1. Cloudflare Bot Protection
```
❌ Error: Cloudflare protection detected
✅ Solution: Tests automatically skip with reference to Jira issue AG-3
```

#### 2. Timeout Issues
```
❌ Error: Test timeout
✅ Solution: Increase timeout in environment config:
```

```typescript
// tests/data/environment-config.ts
environments: {
  demo: {
    timeout: 45000  // Increase from 30000
  }
}
```

#### 3. Browser Installation Issues
```bash
# Reinstall browsers
npm run install:browsers

# Or with Docker
docker-compose build --no-cache
```

#### 4. Flaky Tests
```bash
# Increase retries in CI
TEST_RETRIES=3 npm run test:ci
```

#### 5. Memory Issues
```bash
# Reduce parallel workers
npm run test:serial

# Or limit workers
PLAYWRIGHT_WORKERS=2 npm test
```

### Debug Commands:

```bash
# Run tests in headed mode
npm run test:headed

# Generate traces
npm run trace

# View detailed logs
DEBUG=pw:api npm test

# Record test execution
npx playwright test --video=on
```

### Environment Variables:

```bash
# Debug settings
export DEBUG=pw:api              # Playwright API debug
export DEBUG=pw:browser         # Browser debug
export DEBUG=pw:protocol        # Protocol debug

# CI settings
export CI=true                  # Enable CI mode
export HEADLESS=true           # Force headless mode
export PLAYWRIGHT_WORKERS=2     # Limit workers

# Test settings
export TEST_ENV=demo           # Set environment
export TEST_TIMEOUT=30000      # Set timeout
export RETRIES=2              # Set retry count
```

### Getting Help:

1. **Check Test Reports**: Always review HTML reports first
2. **View Artifacts**: Download artifacts from GitHub Actions
3. **Check Jira Issues**: Review known issues (AG-1, AG-2, AG-3)
4. **GitHub Issues**: Create issues for new problems
5. **Team Slack**: #test-automation channel for quick help

## 📚 Additional Resources

- 📖 [Playwright Documentation](https://playwright.dev/docs)
- 🎯 [Test Plan Specifications](./specs/opencart-login-test-plan.md)
- 🗃️ [Test Data Documentation](./tests/data/README.md)
- 🐛 [Jira Epic AG-1](https://your-jira-domain.atlassian.net/browse/AG-1)
- 📊 [Live Test Dashboard](https://yourusername.github.io/AgenticAiTestAutomation/)

---

*Last Updated: March 5, 2026*  
*CI/CD Pipeline Version: 1.0.0*