#!/bin/bash

# 🚀 Quick Setup Script for CI/CD Pipeline
# This script helps new team members set up the project quickly

set -e

echo "🚀 SauceDemo Test Automation - Quick Setup"
echo "==========================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_step() {
    echo -e "\n${BLUE}➤${NC} $1"
}

print_success() {
    echo -e "  ${GREEN}✓${NC} $1"
}

print_info() {
    echo -e "  ${YELLOW}ℹ${NC} $1"
}

# Step 1: Install dependencies
print_step "Installing dependencies..."
npm ci
npx playwright install --with-deps
print_success "Dependencies installed"

# Step 2: Validate setup
print_step "Validating setup..."
npx playwright --version
print_success "Playwright ready"

# Step 3: Run quick smoke test
print_step "Running smoke tests to validate setup..."
npm run test:smoke
print_success "Smoke tests passed"

# Step 4: Generate initial dashboard
print_step "Generating test dashboard..."
npm run generate-dashboard || print_info "Dashboard generation skipped (optional)"

# Step 5: Show available commands
print_step "Available commands:"
echo ""
echo "📋 Test Execution:"
echo "  npm test                    - Run all tests"
echo "  npm run test:login          - Run login tests only"
echo "  npm run test:smoke          - Run smoke tests"
echo "  npm run test:security       - Run security tests"
echo "  npm run test:performance    - Run performance tests"
echo "  npm run test:ui             - Run tests with UI"
echo "  npm run test:debug          - Debug failed tests"
echo ""
echo "🌐 Cross-Browser Testing:"
echo "  npm run test:chromium       - Chrome tests"
echo "  npm run test:firefox        - Firefox tests"
echo "  npm run test:webkit         - Safari tests"
echo "  npm run test:cross-browser  - All browsers"
echo ""
echo "📊 Reports & Dashboard:"
echo "  npm run report              - Open test report"
echo "  npm run dashboard           - Generate & serve dashboard"
echo "  npm run generate-dashboard  - Generate dashboard only"
echo ""
echo "🎟️ Jira Integration:"
echo "  npm run jira:log-defects    - Log test failures to Jira"
echo "  npm run jira:test-and-log   - Run tests & auto-log failures"
echo ""
echo "🔧 CI/CD Validation:"
echo "  .github/scripts/validate-cicd.sh     - Validate CI/CD setup"
echo "  .github/scripts/validate-cicd.sh -q  - Quick validation"
echo ""

# Step 6: Setup instructions
print_step "Next Steps for CI/CD:"
echo ""
print_info "1. Review CI/CD documentation: .github/README-CICD.md"
print_info "2. Configure GitHub secrets: .github/SECRETS-TEMPLATE.md"
print_info "3. Run local validation: .github/scripts/validate-cicd.sh"
echo ""
print_step "GitHub Repository Setup:"
echo "  1. Add repository secrets for Jira integration"
echo "  2. Update workflow badge URLs in README.md"
echo "  3. Push changes to trigger first CI/CD run"
echo "  4. Monitor GitHub Actions tab for results"
echo ""

print_success "Setup completed! Happy testing! 🎉"
echo ""
print_info "For help, check:"
print_info "  - Test Plan: specs/saucedemo-login-test-plan.md"
print_info "  - CI/CD Docs: .github/README-CICD.md"
print_info "  - Secrets Setup: .github/SECRETS-TEMPLATE.md"