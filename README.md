# 🤖 SauceDemo Test Automation Framework

*Enterprise-grade test automation framework with intelligent CI/CD pipeline for SauceDemo.com testing*

## 🚀 CI/CD Status

[![Daily CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/daily-ci-cd.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/daily-ci-cd.yml)
[![Weekly Tests](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/weekly-comprehensive.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/weekly-comprehensive.yml)
[![PR CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/pr-ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/pr-ci.yml)

> **📋 CI/CD Documentation:** See [.github/README-CICD.md](.github/README-CICD.md) for complete setup and usage instructions.

[![Test Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)](./specs/opencart-login-test-plan.md)
[![Automation Coverage](https://img.shields.io/badge/Automation-100%25-brightgreen)](./tests/)
[![Chrome](https://img.shields.io/badge/Chrome-Supported-4285f4)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-Supported-ff7139)](https://www.mozilla.org/firefox/)
[![Safari](https://img.shields.io/badge/Safari-Supported-000000)](https://www.apple.com/safari/)

[![Playwright](https://img.shields.io/badge/Playwright-1.40.0-2EAD33)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)
[![Jira Epic](https://img.shields.io/badge/Epic-AG--1-0052CC)](https://your-jira-domain.atlassian.net/browse/AG-1)

## 📊 Overview

A comprehensive, production-ready test automation framework built for OpenCart e-commerce platform testing. Features intelligent error handling, multi-environment support, and a complete CI/CD pipeline with daily scheduled test execution.

### 🎯 Key Features

- ⚡ **Automated Daily Testing**: Scheduled execution every day at 8:00 AM UTC
- 🌐 **Multi-Environment Support**: Demo, Staging, Local, Production configurations  
- 🧪 **Cross-Browser Testing**: Chrome, Firefox, Safari/WebKit compatibility
- 🛡️ **Security Testing**: SQL injection, XSS, and command injection prevention
- 📈 **Performance Monitoring**: Page load and response time validation
- 🐳 **Docker Integration**: Containerized testing environment
- 🔔 **Smart Notifications**: Slack and email alerts on test failures
- 📊 **Live Dashboard**: Real-time test results and metrics
- 🤖 **Intelligent Error Handling**: Cloudflare protection detection and graceful skipping
- 📝 **Comprehensive Reporting**: HTML reports, artifacts, and traceability

## 📁 Project Structure

```
AgenticAiTestAutomation/
├── 📄 README.md                          # Project documentation
├── 📄 package.json                       # Dependencies & 30+ npm scripts
├── 📄 playwright.config.ts               # Multi-browser configuration  
├── 🐳 Dockerfile                         # Containerized testing
├── 🐳 docker-compose.yml                 # Multi-service orchestration
├── 📁 .github/workflows/                 # CI/CD Pipeline
│   ├── 📄 schedule-tests.yml            # Daily automated tests (8AM UTC)
│   ├── 📄 pr-tests.yml                  # Pull request validation
│   └── 📄 test-dashboard.yml            # Live dashboard generation
├── 📁 docs/                             # Documentation
│   ├── 📄 CI-CD-PIPELINE.md             # Complete CI/CD guide
│   └── 📄 STATUS-BADGES.md              # Badge configuration
├── 📁 specs/                            # Test Specifications
│   ├── 📄 README.md                     # Specifications overview
│   └── 📄 opencart-login-test-plan.md   # 20 scenarios, 6 test suites
├── 📁 tests/                            # Test Implementation
│   ├── 📄 example.spec.ts               # Playwright examples
│   ├── 📄 seed.spec.ts                  # Test templates
│   ├── 📁 login/                        # Login functionality tests
│   │   └── 📄 successful-login.spec.ts   # Main test automation
│   └── 📁 data/                         # Test Data Management
│       ├── 📄 index.ts                  # Type-safe exports
│       ├── 📄 login-test-data.ts        # Core test constants
│       ├── 📄 test-helpers.ts           # Utility functions
│       ├── 📄 environment-config.ts     # Multi-environment config
│       ├── 📄 test-data-factory.ts      # Factory pattern
│       └── 📄 README.md                 # Data documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/anjalipnair/AgenticAiTestAutomation.git
cd AgenticAiTestAutomation

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers

# Run tests
npm test
```

### Docker Quick Start

```bash
# Build and run with Docker Compose
docker-compose up playwright-tests

# Or build custom image
docker build -t opencart-tests .
docker run opencart-tests
```

## 🧪 Test Execution

### Basic Commands

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

### Environment-Specific Testing

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

### Test Suite Execution

```bash
# Login functionality only
npm run test:login

# Security tests (SQL injection, XSS)
npm run test:security

# Performance tests
npm run test:performance

# Smoke tests (quick validation)
npm run test:smoke
```

### Cross-Browser Testing

```bash
# Chrome/Chromium only
npm run test:chromium

# Firefox only
npm run test:firefox

# Safari/WebKit only  
npm run test:webkit

# All browsers
npm run test:cross-browser
```

### Docker-Based Testing

```bash
# All Docker test options
npm run test:docker                    # Basic Docker tests
npm run test:docker-demo              # Demo environment
npm run test:docker-staging           # Staging environment  
npm run test:docker-security          # Security test suite
npm run test:docker-performance       # Performance tests
npm run test:docker-cross-browser     # Multi-browser testing
npm run report:serve                  # Serve reports via Docker
```

## ⏰ CI/CD Pipeline

### Automated Scheduling

- **Daily Tests**: Every day at 8:00 AM UTC
- **Environments**: Demo and Staging
- **Browsers**: Chromium, Firefox, WebKit
- **Duration**: ~15-30 minutes
- **Artifacts**: Retained for 30 days

### Workflow Triggers

1. **📅 Scheduled**: Daily at 8:00 AM UTC - Full regression suite
2. **🔄 Pull Requests**: Smoke tests on PR creation/update  
3. **📤 Push to Main**: Full test suite on code deployment
4. **🎮 Manual**: On-demand execution via GitHub Actions UI

### Pipeline Features

- 🎯 **Multi-Environment Matrix**: Parallel testing across environments
- 🧪 **Cross-Browser Matrix**: Simultaneous browser compatibility testing
- 📊 **Comprehensive Reporting**: HTML, JSON, JUnit report formats
- 🔔 **Smart Notifications**: Slack alerts on failures, email summaries
- 📈 **Performance Monitoring**: Automated threshold validation
- 🛡️ **Security Scanning**: Continuous security test execution
- 📋 **Artifact Management**: Test reports, screenshots, videos, traces

### Test Matrix

| Environment | Browsers | Test Suites | Frequency |
|-------------|----------|-------------|-----------|
| Demo | Chrome, Firefox, Safari | Full Regression | Daily |
| Staging | Chrome, Firefox, Safari | Full Regression | Daily |
| Local | Chrome | Smoke Tests | On PR |
| Production | Chrome | Smoke Tests | Manual |

## 📊 Test Coverage

### Test Scenarios: 20 Total

| Test Suite | Scenarios | Priority | Automation |
|------------|-----------|----------|------------|
| **Positive Login** | 3 | Critical | ✅ 100% |
| **Negative Login** | 5 | High | ✅ 100% |  
| **Security & Validation** | 4 | Critical | ✅ 100% |
| **UI/UX Testing** | 2 | Medium | ✅ 100% |
| **Cross-Browser** | 3 | High | ✅ 100% |
| **Performance** | 3 | Medium | ✅ 100% |

### Coverage Metrics
- 🎯 **Total Test Scenarios**: 20
- 🏗️ **Test Suites**: 6 comprehensive suites
- 🤖 **Automation Coverage**: 100%
- 🌐 **Browser Coverage**: 3 major browsers
- 📱 **Device Coverage**: Desktop, tablet, mobile viewports
- 🔒 **Security Coverage**: SQL injection, XSS, command injection

## 🛡️ Security Testing

### Security Validations

- ✅ **SQL Injection Prevention**: Input sanitization testing
- ✅ **XSS Protection**: Output encoding validation  
- ✅ **Command Injection**: System command prevention
- ✅ **Authentication Security**: Login protection mechanisms
- ✅ **Session Management**: Secure session handling
- ✅ **CSRF Protection**: Cross-site request forgery prevention

### Security Payloads

```typescript
// SQL Injection Examples
\"' OR '1'='1' --\"
\"'; DROP TABLE users; --\"

// XSS Examples  
\"<script>alert('XSS')</script>\"
\"<img src=x onerror=alert('XSS')>\"

// Command Injection Examples
\"; ls -la\"
\"| whoami\"
```

## ⚡ Performance Monitoring

### Performance Thresholds

| Metric | Demo Environment | Staging | Local |
|--------|------------------|---------|-------|
| **Page Load** | < 5000ms | < 3000ms | < 2000ms |
| **API Response** | < 3000ms | < 2000ms | < 1000ms |
| **Element Load** | < 2000ms | < 1500ms | < 1000ms |

### Performance Features
- 📊 **Real-time Monitoring**: Continuous performance tracking
- 🎯 **Threshold Validation**: Automated performance gate checks  
- 📈 **Trend Analysis**: Historical performance data collection
- ⚠️ **Alert System**: Performance degradation notifications

## 🌍 Multi-Environment Support

### Available Environments

1. **🌐 Demo Environment** (demo.opencart.com)
   - Purpose: Daily automated testing
   - Configuration: High timeout, headless execution
   - Use Case: Regression testing, CI/CD validation

2. **🔧 Staging Environment** (staging.opencart.com)  
   - Purpose: Pre-production validation
   - Configuration: Medium timeout, headed execution
   - Use Case: Release candidate testing

3. **💻 Local Environment** (localhost:8080)
   - Purpose: Development and debugging
   - Configuration: Low timeout, headed execution
   - Use Case: Developer testing, feature development

4. **🏭 Production Environment** (opencart.com)
   - Purpose: Production smoke testing
   - Configuration: High timeout, headless execution
   - Use Case: Production deployment validation

## 🔔 Notifications & Monitoring

### Notification Channels

#### Slack Integration
- 📢 **Test Failures**: Immediate alerts with failure details
- 📅 **Daily Summaries**: Scheduled test completion reports  
- 🔄 **Manual Runs**: On-demand test execution notifications
- 📊 **Dashboard Links**: Direct access to test reports

#### Email Notifications
- 📧 **Failure Alerts**: Detailed failure analysis and next steps
- 📈 **Weekly Reports**: Summary of test trends and metrics
- 🎯 **Performance Alerts**: Performance threshold violations

### Live Dashboard

Access real-time test results at: **[Test Dashboard](https://anjalipnair.github.io/AgenticAiTestAutomation/)**

#### Dashboard Features:
- 📊 **Test Metrics**: Real-time pass/fail rates and execution trends
- 🎯 **Coverage Statistics**: Complete test coverage breakdown
- 🌐 **Cross-Browser Results**: Multi-browser compatibility status
- ⚡ **Performance Data**: Page load times and API response metrics
- 📈 **Historical Trends**: 30-day test execution history
- 🔗 **Quick Links**: Direct access to Jira issues and detailed reports

## 🏗️ Architecture & Design

### Test Data Management

- 🏭 **Factory Pattern**: Structured test data creation
- 📊 **Type Safety**: Full TypeScript type definitions
- 🌍 **Multi-Environment**: Environment-specific configurations
- 🔄 **Data Generation**: Dynamic test data creation utilities
- 🛡️ **Security Payloads**: Comprehensive malicious input testing

### Error Handling

- 🤖 **Intelligent Detection**: Cloudflare protection auto-detection
- ⏭️ **Graceful Skipping**: Automatic test skipping with defect references
- 📝 **Comprehensive Logging**: Detailed error tracking and reporting
- 🔗 **Jira Integration**: Automatic linking to known issues (AG-3)

### Browser Support

| Browser | Version | Status | Use Case |
|---------|---------|---------|----------|
| **Chrome** | Latest | ✅ Primary | Main testing browser |
| **Firefox** | Latest | ✅ Secondary | Cross-browser validation |
| **Safari** | Latest | ✅ Secondary | WebKit compatibility |

## 📚 Documentation

### Complete Documentation Suite

- 📋 **[Test Plan](./specs/opencart-login-test-plan.md)**: 20 scenarios with Gherkin acceptance criteria
- 🚀 **[CI/CD Pipeline](./docs/CI-CD-PIPELINE.md)**: Complete pipeline setup and usage guide  
- 📊 **[Test Data](./tests/data/README.md)**: Comprehensive test data management guide
- 🏷️ **[Status Badges](./docs/STATUS-BADGES.md)**: CI/CD status badge configuration

### Jira Integration

- 📋 **Epic AG-1**: [OpenCart Demo Testing](https://your-jira-domain.atlassian.net/browse/AG-1)
- 📝 **User Story AG-2**: [Login Functionality Testing](https://your-jira-domain.atlassian.net/browse/AG-2)
- 🐛 **Bug AG-3**: [Cloudflare Bot Protection Issues](https://your-jira-domain.atlassian.net/browse/AG-3)

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-test-suite`
3. **Write tests**: Follow existing patterns and conventions
4. **Run tests locally**: `npm test`
5. **Submit pull request**: Automated PR tests will run
6. **Review and merge**: Team review process

### Coding Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting  
- **Conventional Commits**: Structured commit messages

### Adding New Tests

```typescript
// Example: Adding new test scenario
import { TestDataFactory } from '../data';

test('new functionality test', async ({ page }) => {
  const testData = TestDataFactory.forNewScenario();
  // Test implementation
});
```

## 🆘 Support & Troubleshooting

### Common Issues

1. **🛡️ Cloudflare Protection**: Tests automatically skip with AG-3 reference
2. **⏱️ Timeout Issues**: Adjust environment-specific timeout settings
3. **🖥️ Browser Issues**: Run `npm run install:browsers` to reinstall
4. **🐳 Docker Issues**: Rebuild with `docker-compose build --no-cache`

### Getting Help

- 📖 **Documentation**: Check comprehensive docs in `/docs/` directory
- 📊 **Test Reports**: Review HTML reports for detailed failure analysis
- 🎫 **Jira Issues**: Check existing issues and create new ones as needed
- 👥 **Team Support**: Contact test automation team via Slack #test-automation

### Debug Commands

```bash
# Run tests with debug output
DEBUG=pw:api npm test

# Run in headed mode for visual debugging
npm run test:headed

# Generate and view execution traces
npm run trace

# Create test recordings
npx playwright test --video=on
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

**OpenCart Test Automation Team**  
- 📧 Email: test-automation@company.com
- 💬 Slack: #test-automation  
- 🎫 Jira: [AG-1 Epic](https://your-jira-domain.atlassian.net/browse/AG-1)

---

*🤖 Automated testing made intelligent. Built with ❤️ by the Test Automation Team.*

**Last Updated**: March 5, 2026 | **Version**: 1.0.0 | **Pipeline**: Active ✅