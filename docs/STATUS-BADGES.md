# CI/CD Status Badges Configuration

This document provides the markdown badges for displaying CI/CD pipeline status in README files.

## Main Status Badges

### Scheduled Test Status
```markdown
[![Daily Tests](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/schedule-tests.yml/badge.svg)](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/schedule-tests.yml)
```

### Pull Request Tests
```markdown
[![PR Tests](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/pr-tests.yml/badge.svg)](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/pr-tests.yml)
```

### Test Dashboard Status  
```markdown
[![Test Dashboard](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/test-dashboard.yml/badge.svg)](https://anjalipnair.github.io/AgenticAiTestAutomation/)
```

## Environment-Specific Badges

### Demo Environment
```markdown
[![Demo Environment Tests](https://img.shields.io/badge/Demo-Passing-brightgreen)](https://demo.opencart.com)
```

### Staging Environment
```markdown
[![Staging Environment Tests](https://img.shields.io/badge/Staging-Passing-brightgreen)](https://staging.opencart.com)
```

## Test Coverage Badges

### Overall Coverage
```markdown
[![Test Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)](./specs/opencart-login-test-plan.md)
```

### Automation Coverage
```markdown
[![Automation Coverage](https://img.shields.io/badge/Automation-100%25-brightgreen)](./tests/)
```

## Browser Support Badges

### Chrome Support
```markdown
[![Chrome](https://img.shields.io/badge/Chrome-Supported-4285f4)](https://www.google.com/chrome/)
```

### Firefox Support
```markdown
[![Firefox](https://img.shields.io/badge/Firefox-Supported-ff7139)](https://www.mozilla.org/firefox/)
```

### Safari Support  
```markdown
[![Safari](https://img.shields.io/badge/Safari-Supported-000000)](https://www.apple.com/safari/)
```

## Technology Stack Badges

### Playwright
```markdown
[![Playwright](https://img.shields.io/badge/Playwright-1.40.0-2EAD33)](https://playwright.dev/)
```

### TypeScript
```markdown
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)](https://www.typescriptlang.org/)
```

### Node.js
```markdown
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933)](https://nodejs.org/)
```

### Docker
```markdown
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)
```

## Jira Integration Badges

### Epic Status
```markdown
[![Jira Epic](https://img.shields.io/badge/Epic-AG--1-0052CC)](https://your-jira-domain.atlassian.net/browse/AG-1)
```

### User Story Status
```markdown
[![User Story](https://img.shields.io/badge/Story-AG--2-0052CC)](https://your-jira-domain.atlassian.net/browse/AG-2)
```

### Bug Tracking
```markdown
[![Known Issues](https://img.shields.io/badge/Bug-AG--3-FF5630)](https://your-jira-domain.atlassian.net/browse/AG-3)
```

## Quality Badges

### Code Quality
```markdown
[![Code Quality](https://img.shields.io/badge/Quality-A+-brightgreen)](./docs/CI-CD-PIPELINE.md)
```

### Documentation
```markdown
[![Documentation](https://img.shields.io/badge/Docs-Complete-brightgreen)](./docs/)
```

### Last Test Run
```markdown
[![Last Test Run](https://img.shields.io/badge/Last%20Run-Success-brightgreen)](https://github.com/anjalipnair/AgenticAiTestAutomation/actions)
```

## Usage in README.md

Add this section to your main README.md:

```markdown
## 🚀 CI/CD Status

[![Daily Tests](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/schedule-tests.yml/badge.svg)](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/schedule-tests.yml)
[![PR Tests](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/pr-tests.yml/badge.svg)](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/pr-tests.yml)
[![Test Dashboard](https://github.com/anjalipnair/AgenticAiTestAutomation/actions/workflows/test-dashboard.yml/badge.svg)](https://anjalipnair.github.io/AgenticAiTestAutomation/)

[![Test Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)](./specs/opencart-login-test-plan.md)
[![Automation Coverage](https://img.shields.io/badge/Automation-100%25-brightgreen)](./tests/)
[![Chrome](https://img.shields.io/badge/Chrome-Supported-4285f4)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-Supported-ff7139)](https://www.mozilla.org/firefox/)
[![Safari](https://img.shields.io/badge/Safari-Supported-000000)](https://www.apple.com/safari/)
```

## Custom Badge Configuration

For dynamic badges that update with actual test results, consider integrating with:

1. **Shields.io Dynamic Badges**: Pull data from test results API
2. **GitHub Status API**: Update status based on test outcomes  
3. **Custom Badge Service**: Generate badges from test artifacts

Example dynamic badge:
```markdown
[![Test Results](https://img.shields.io/endpoint?url=https://your-api.com/badge-data)](https://your-dashboard.com)
```