# 🚀 CI/CD Pipeline Documentation

This repository includes a comprehensive CI/CD pipeline setup with GitHub Actions that runs automated tests on a daily basis and provides extensive testing capabilities.

## 📊 Workflow Status

![Daily CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/🚀%20Daily%20CI/CD%20Pipeline/badge.svg)
![Weekly Tests](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/📅%20Weekly%20Comprehensive%20Test%20Suite/badge.svg)
![PR CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/🔄%20Pull%20Request%20CI/badge.svg)

> **Note:** Replace `YOUR_USERNAME/YOUR_REPO` with your actual GitHub repository path.

## 🎯 Pipeline Overview

### 🗓️ Scheduled Workflows

| Workflow | Schedule | Purpose |
|----------|----------|---------|
| **Daily CI/CD Pipeline** | Daily at 6:00 AM UTC | Comprehensive daily testing with Jira integration |
| **Weekly Comprehensive** | Sundays at 2:00 AM UTC | Full test suite including visual regression and load testing |

### 🔄 Event-Driven Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Pull Request CI** | Pull requests to main/develop | Quick validation of code changes |
| **Manual Test Execution** | Manual dispatch | On-demand test execution with customizable parameters |

## 🧪 Test Categories

### 1. **Daily CI/CD Pipeline** (`daily-ci-cd.yml`)

**Features:**
- 🎯 Smoke tests for quick validation
- 🧪 Main test suite with browser matrix and sharding
- 🛡️ Security testing (SQL injection, XSS)
- ⚡ Performance testing
- 🎟️ Automatic Jira defect logging
- 📊 Dashboard generation and updates
- 📢 Comprehensive notifications

**Test Matrix:**
- **Browsers:** Chromium, Firefox, WebKit
- **Environments:** Demo, Staging, Production
- **Sharding:** 4 parallel shards for faster execution

### 2. **Weekly Comprehensive** (`weekly-comprehensive.yml`)

**Features:**
- 🔄 Full regression testing across all browsers and environments
- 👁️ Visual regression testing with screenshot comparisons
- 🚛 Load testing with concurrent users
- 📊 Data-driven testing with multiple user types
- ♿ Accessibility testing
- 📈 Comprehensive trend analysis
- 🎟️ Weekly Jira summary reports

### 3. **Pull Request CI** (`pr-ci.yml`)

**Features:**
- 🔍 Smart change detection
- ✅ Lint and format validation
- 🏃 Quick smoke and login tests
- 🛡️ Security validation
- 🌐 Cross-browser compatibility checks
- 📊 Automated PR comments with results
- 📈 Performance impact analysis

### 4. **Manual Test Execution** (`manual-test.yml`)

**Features:**
- 🎯 Customizable test execution
- 🌍 Environment selection
- 🌐 Browser selection
- 📊 Optional dashboard generation
- 🎟️ Optional Jira integration

## 🛠️ Setup Instructions

### 1. Repository Secrets Configuration

Create the following secrets in your GitHub repository settings:

```
Settings → Secrets and variables → Actions → New repository secret
```

#### Required Secrets for Jira Integration:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `JIRA_HOST` | Jira instance hostname | `your-company.atlassian.net` |
| `JIRA_EMAIL` | Jira account email | `your-email@company.com` |
| `JIRA_API_TOKEN` | Jira API token | Generate from Jira account settings |
| `JIRA_PROJECT_KEY` | Jira project key | `DM06032026` |

#### Optional Secrets:

| Secret Name | Description |
|-------------|-------------|
| `SLACK_WEBHOOK` | Slack webhook for notifications |
| `EMAIL_SMTP_*` | Email notification configuration |

### 2. Jira Setup

1. **Create Jira API Token:**
   - Go to [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens)
   - Click "Create API token"
   - Copy the token and add it as `JIRA_API_TOKEN` secret

2. **Configure Project:**
   - Update the default project key in workflows if different from `DM06032026`
   - Ensure your Jira project supports issue creation via API

### 3. Dashboard Setup

The pipeline automatically generates interactive dashboards. To view them:

1. **Local Development:**
   ```bash
   npm run serve-dashboard
   # Opens dashboard at http://localhost:8083
   ```

2. **CI/CD Generated:**
   - Dashboards are uploaded as artifacts after each run
   - Download from Actions → Run → Artifacts

## 🎮 Manual Usage

### Daily Testing

Runs automatically at 6:00 AM UTC daily. To run manually:

1. Go to **Actions** tab
2. Select **🚀 Daily CI/CD Pipeline**
3. Click **Run workflow**
4. Choose environment and test suite
5. Click **Run workflow**

### Weekly Comprehensive Testing

Runs automatically every Sunday. To run manually:

1. Go to **Actions** tab  
2. Select **📅 Weekly Comprehensive Test Suite**
3. Click **Run workflow**
4. Specify environments (comma-separated)
5. Click **Run workflow**

### On-Demand Testing

For immediate test execution:

1. Go to **Actions** tab
2. Select **🎯 Manual Test Execution**
3. Click **Run workflow**
4. Configure:
   - **Test Type:** login, security, performance, smoke, cross-browser, all
   - **Environment:** demo, staging, production
   - **Browser:** chromium, firefox, webkit, all
   - **Generate Dashboard:** true/false
   - **Log to Jira:** true/false
5. Click **Run workflow**

## 📊 Test Results and Artifacts

### Available Artifacts

Each workflow run generates artifacts:

| Artifact Type | Content | Retention |
|---------------|---------|-----------|
| **Test Results** | Playwright HTML/JSON reports | 30 days |
| **Security Results** | Security scan reports | 30 days |
| **Performance Results** | Performance metrics | 30 days |
| **Dashboard** | Interactive test dashboard | 30 days |
| **Weekly Reports** | Comprehensive analysis | 365 days |

### Dashboard Features

The generated dashboard includes:

- **Test Results Summary** with pass/fail rates
- **Trend Analysis** over time
- **Performance Metrics** and comparisons
- **Security Findings** and recommendations
- **Browser Compatibility** matrix
- **Interactive Filters** by environment, browser, test type

## 🎟️ Jira Integration

### Automatic Defect Logging

When tests fail, the pipeline automatically:

1. **Analyzes Failures** - Identifies root causes
2. **Creates Jira Issues** - With detailed information
3. **Adds Screenshots** - For UI/visual failures
4. **Links Test Results** - Direct links to reports
5. **Sets Priorities** - Based on failure impact

### Jira Issue Template

Automatically created issues include:

```
Title: [TEST FAILURE] Login functionality - Invalid credentials test failed
Priority: High/Medium/Low (based on test type)
Labels: automation, test-failure, login
Environment: Demo/Staging/Production

Description:
- Test File: tests/login/login-failure-invalid-username.spec.ts
- Browser: Chromium
- Failure Reason: [Extracted from test output]
- Screenshot: [Attached if available]
- Test Report: [Link to full report]
- Reproduction Steps: [From test specification]
```

### Weekly Summary

Every Sunday, a comprehensive Jira summary is created with:

- **Weekly Test Statistics**
- **Failure Trend Analysis**
- **Top Issues by Frequency**
- **Performance Trends**
- **Recommendations for Improvement**

## 🔧 Customization

### Modify Test Schedules

Edit the `cron` expressions in workflow files:

```yaml
schedule:
  - cron: '0 6 * * *'  # Daily at 6 AM UTC
  - cron: '0 2 * * 0'  # Weekly on Sunday at 2 AM UTC
```

### Add New Test Categories

1. **Add npm script** in `package.json`:
   ```json
   "test:new-category": "playwright test tests/new-category/"
   ```

2. **Update workflow** to include new category:
   ```yaml
   - name: Run new category tests
     run: npm run test:new-category
   ```

### Configure Notifications

Add notification steps to workflows:

```yaml
- name: Send Slack notification
  if: failure()
  run: |
    curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"🚨 Tests failed!"}' \
    ${{ secrets.SLACK_WEBHOOK }}
```

## 🐛 Troubleshooting

### Common Issues

1. **Tests failing in CI but passing locally:**
   - Check browser dependencies: `npx playwright install --with-deps`
   - Verify environment variables are set correctly
   - Review trace files in test artifacts

2. **Jira integration not working:**
   - Verify all Jira secrets are configured
   - Check Jira API token permissions
   - Ensure project key is correct

3. **Dashboard not generating:**
   - Check Python dependencies are installed
   - Verify test results exist
   - Review dashboard generation logs

4. **Performance tests timing out:**
   - Increase timeout values in `playwright.config.ts`
   - Check network conditions in CI environment
   - Reduce test parallelism if needed

### Debug Commands

```bash
# Run tests with debug info
DEBUG=pw:api npm test

# View trace files
npx playwright show-trace trace.zip

# Check test configuration
npx playwright show-config
```

## 📚 Additional Resources

- **Test Plan:** [SauceDemo Login Test Plan](specs/saucedemo-login-test-plan.md)
- **Playwright Documentation:** [playwright.dev](https://playwright.dev/)
- **GitHub Actions Documentation:** [docs.github.com](https://docs.github.com/actions)
- **Jira Board:** [Project Board](https://mercator-team-nair.atlassian.net/jira/software/c/projects/DM06032026/boards/199/backlog)

## 🤝 Contributing

1. **Create Feature Branch:** `git checkout -b feature/new-test-category`
2. **Add Tests:** Follow existing patterns in `tests/` directory
3. **Update Workflows:** Add new test categories to CI/CD pipelines
4. **Test Locally:** Run tests locally before pushing
5. **Create Pull Request:** PR CI will validate your changes

---

**📞 Support:** For issues or questions about the CI/CD pipeline, please create an issue in this repository or contact the test automation team.