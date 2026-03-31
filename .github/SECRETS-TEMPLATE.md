# GitHub Repository Secrets Configuration Template

This file provides a template for configuring GitHub repository secrets required for the CI/CD pipeline.

## 🔐 Required Secrets

### Jira Integration (Required for defect logging)

```bash
# Jira instance hostname (without https://)
JIRA_HOST=your-company.atlassian.net

# Your Jira account email address
JIRA_EMAIL=your-email@company.com

# Jira API token (generate from account settings)
JIRA_API_TOKEN=your-jira-api-token-here

# Your Jira project key
JIRA_PROJECT_KEY=DM06032026
```

## 🛠️ Setup Instructions

### 1. Generate Jira API Token

1. Go to [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Give it a meaningful label (e.g., "GitHub Actions CI/CD")
4. Copy the generated token immediately (it won't be shown again)

### 2. Add Secrets to GitHub Repository

1. Navigate to your GitHub repository
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the exact name and value

### 3. Verify Setup

After adding secrets, you can test them by:

1. Go to **Actions** tab
2. Run **🎯 Manual Test Execution** workflow
3. Enable "Log to Jira" option
4. Check if defects are logged properly

## 📧 Optional Notification Secrets

### Slack Integration

```bash
# Slack webhook URL for notifications
SLACK_WEBHOOK=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### Email Notifications

```bash
# SMTP server configuration
EMAIL_SMTP_HOST=smtp.your-company.com
EMAIL_SMTP_PORT=587
EMAIL_SMTP_USER=notifications@your-company.com
EMAIL_SMTP_PASS=your-smtp-password
EMAIL_FROM=ci-cd@your-company.com
EMAIL_TO=team@your-company.com
```

### Teams Integration

```bash
# Microsoft Teams webhook URL
TEAMS_WEBHOOK=https://your-company.webhook.office.com/webhookb2/...
```

## 🌍 Environment-Specific Secrets (Optional)

If you need different configurations for different environments:

```bash
# Demo environment
DEMO_BASE_URL=https://demo.saucedemo.com
DEMO_API_KEY=demo-api-key

# Staging environment  
STAGING_BASE_URL=https://staging.saucedemo.com
STAGING_API_KEY=staging-api-key

# Production environment
PROD_BASE_URL=https://www.saucedemo.com
PROD_API_KEY=production-api-key
```

## 🔒 Security Best Practices

1. **Never commit secrets** to your repository
2. **Use environment-specific secrets** when needed
3. **Regularly rotate API tokens** and passwords
4. **Limit secret scope** to minimum required permissions
5. **Monitor secret usage** in GitHub Actions logs (values are automatically masked)

## 🧪 Testing Your Secrets

### Test Jira Integration

```bash
# Local testing (set environment variables)
export JIRA_HOST="your-company.atlassian.net"
export JIRA_EMAIL="your-email@company.com"  
export JIRA_API_TOKEN="your-token"
export JIRA_PROJECT_KEY="DM06032026"

# Run test script
npm run jira:log-defects
```

### Validate Configuration

Create a simple test to verify your Jira connection:

```javascript
// test-jira-connection.js
const config = {
  host: process.env.JIRA_HOST,
  email: process.env.JIRA_EMAIL,
  token: process.env.JIRA_API_TOKEN,
  project: process.env.JIRA_PROJECT_KEY
};

async function testConnection() {
  const auth = Buffer.from(`${config.email}:${config.token}`).toString('base64');
  
  try {
    const response = await fetch(`https://${config.host}/rest/api/3/myself`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('✅ Jira connection successful');
      const user = await response.json();
      console.log(`Connected as: ${user.displayName} (${user.emailAddress})`);
    } else {
      console.error('❌ Jira connection failed:', response.status);
    }
  } catch (error) {
    console.error('❌ Connection error:', error.message);
  }
}

testConnection();
```

## 📋 Secrets Checklist

Use this checklist to ensure all secrets are properly configured:

### Core Secrets
- [ ] `JIRA_HOST` - Jira instance hostname
- [ ] `JIRA_EMAIL` - Your Jira email address
- [ ] `JIRA_API_TOKEN` - Valid Jira API token
- [ ] `JIRA_PROJECT_KEY` - Target Jira project key

### Optional Secrets
- [ ] `SLACK_WEBHOOK` - For Slack notifications
- [ ] `EMAIL_SMTP_*` - For email notifications  
- [ ] `TEAMS_WEBHOOK` - For Microsoft Teams notifications

### Verification
- [ ] Secrets are not visible in repository code
- [ ] Manual test workflow runs successfully
- [ ] Jira integration creates test issues
- [ ] Notifications are received (if configured)
- [ ] All team members have necessary access

## 🆘 Troubleshooting

### Common Issues

1. **"Invalid credentials" error:**
   - Verify email address is correct
   - Regenerate API token
   - Check Jira permissions

2. **"Project not found" error:**
   - Verify project key spelling
   - Check project access permissions
   - Ensure project exists and is active

3. **Workflow succeeds but no Jira issues created:**
   - Check workflow logs for error messages
   - Verify test failures actually occurred
   - Check Jira project permissions for issue creation

### Getting Help

If you encounter issues:

1. **Check GitHub Actions logs** for detailed error messages
2. **Test locally** using environment variables
3. **Verify Jira permissions** in your Atlassian admin console
4. **Contact your team's Jira administrator** for permission issues

---

**🔑 Remember:** Keep your secrets secure and never share them in chat, email, or other unsecured channels!