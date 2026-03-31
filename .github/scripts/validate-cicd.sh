#!/bin/bash

# 🚀 CI/CD Local Testing Script
# This script helps validate your CI/CD setup locally before pushing to GitHub

set -e  # Exit on any error

echo "🚀 CI/CD Pipeline Local Validation"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_nodejs() {
    print_status "Checking Node.js installation..."
    if command -v node >/dev/null 2>&1; then
        NODE_VERSION=$(node --version)
        print_success "Node.js found: $NODE_VERSION"
    else
        print_error "Node.js is not installed. Please install Node.js 18+ to continue."
        exit 1
    fi
}

# Check if npm dependencies are installed
check_dependencies() {
    print_status "Checking npm dependencies..."
    if [ ! -d "node_modules" ]; then
        print_warning "Node modules not found. Installing dependencies..."
        npm ci
    else
        print_success "Dependencies are installed"
    fi
}

# Check if Playwright browsers are installed
check_playwright() {
    print_status "Checking Playwright browser installation..."
    if npx playwright --version >/dev/null 2>&1; then
        PLAYWRIGHT_VERSION=$(npx playwright --version)
        print_success "Playwright found: $PLAYWRIGHT_VERSION"
        
        # Install browsers if needed
        print_status "Installing Playwright browsers..."
        npx playwright install --with-deps
        print_success "Playwright browsers installed"
    else
        print_error "Playwright not found in dependencies"
        exit 1
    fi
}

# Validate test configuration
validate_config() {
    print_status "Validating Playwright configuration..."
    if [ -f "playwright.config.ts" ]; then
        npx playwright show-config >/dev/null 2>&1
        print_success "Playwright configuration is valid"
    else
        print_error "playwright.config.ts not found"
        exit 1
    fi
}

# Run lint checks (if available)
run_lint() {
    print_status "Running lint checks..."
    if npm run lint:tests >/dev/null 2>&1; then
        print_success "Lint checks passed"
    else
        print_warning "Lint checks failed or not configured"
    fi
}

# Run smoke tests
run_smoke_tests() {
    print_status "Running smoke tests..."
    if npm run test:smoke; then
        print_success "Smoke tests passed"
    else
        print_error "Smoke tests failed"
        return 1
    fi
}

# Run login tests
run_login_tests() {
    print_status "Running login tests..."
    if npm run test:login; then
        print_success "Login tests passed"
    else
        print_error "Login tests failed"
        return 1
    fi
}

# Test Jira integration (if configured)
test_jira_integration() {
    print_status "Testing Jira integration..."
    
    # Check if Jira environment variables are set
    if [ -n "$JIRA_HOST" ] && [ -n "$JIRA_EMAIL" ] && [ -n "$JIRA_API_TOKEN" ] && [ -n "$JIRA_PROJECT_KEY" ]; then
        print_status "Jira credentials found, testing connection..."
        if npm run jira:log-defects --dry-run >/dev/null 2>&1; then
            print_success "Jira integration test passed"
        else
            print_warning "Jira integration test failed (this is optional)"
        fi
    else
        print_warning "Jira credentials not configured (optional for local testing)"
        print_status "To test Jira integration, set these environment variables:"
        echo "  export JIRA_HOST=your-company.atlassian.net"
        echo "  export JIRA_EMAIL=your-email@company.com"
        echo "  export JIRA_API_TOKEN=your-api-token"
        echo "  export JIRA_PROJECT_KEY=DM06032026"
    fi
}

# Generate test dashboard
generate_dashboard() {
    print_status "Generating test dashboard..."
    if npm run generate-dashboard >/dev/null 2>&1; then
        print_success "Dashboard generated successfully"
        print_status "Dashboard available at: dashboard/interactive-test-dashboard.html"
    else
        print_warning "Dashboard generation failed (optional)"
    fi
}

# Validate GitHub Actions workflows
validate_workflows() {
    print_status "Validating GitHub Actions workflows..."
    
    local workflows_dir=".github/workflows"
    if [ -d "$workflows_dir" ]; then
        local workflow_count=$(find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | wc -l)
        print_success "Found $workflow_count workflow files"
        
        # List workflows
        print_status "Available workflows:"
        find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | while read -r workflow; do
            local name=$(basename "$workflow")
            echo "  - $name"
        done
    else
        print_error "GitHub workflows directory not found"
        exit 1
    fi
}

# Check for required files
check_required_files() {
    print_status "Checking required files..."
    
    local required_files=(
        "package.json"
        "playwright.config.ts"
        ".github/workflows/daily-ci-cd.yml"
        ".github/workflows/pr-ci.yml"
        ".github/workflows/weekly-comprehensive.yml"
        ".github/workflows/manual-test.yml"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "✓ $file"
        else
            print_error "✗ $file (missing)"
        fi
    done
}

# Main execution
main() {
    echo ""
    print_status "Starting CI/CD pipeline validation..."
    echo ""
    
    # Basic checks
    check_nodejs
    check_dependencies
    check_playwright
    validate_config
    check_required_files
    validate_workflows
    
    echo ""
    print_status "Running test validation..."
    echo ""
    
    # Test execution
    run_lint
    
    # Set CI environment for testing
    export CI=true
    
    if run_smoke_tests; then
        print_success "Basic test validation passed"
    else
        print_error "Basic test validation failed"
        exit 1
    fi
    
    # Optional components
    echo ""
    print_status "Testing optional components..."
    echo ""
    
    test_jira_integration
    generate_dashboard
    
    echo ""
    print_success "🎉 CI/CD pipeline validation completed successfully!"
    echo ""
    print_status "Next steps:"
    echo "  1. Review any warnings above"
    echo "  2. Configure GitHub repository secrets (see .github/SECRETS-TEMPLATE.md)"
    echo "  3. Push your changes to trigger the CI/CD pipeline"
    echo "  4. Monitor the GitHub Actions for the first run"
    echo ""
    print_status "Helpful commands:"
    echo "  npm run test           - Run all tests"
    echo "  npm run test:ui        - Run tests with UI"
    echo "  npm run test:debug     - Debug test failures"
    echo "  npm run dashboard      - Generate and serve dashboard"
    echo ""
}

# Handle script arguments
case "${1:-}" in
    "--quick"|"-q")
        print_status "Running quick validation (no test execution)"
        check_nodejs
        check_dependencies
        check_playwright
        validate_config
        check_required_files
        validate_workflows
        print_success "Quick validation completed"
        ;;
    "--tests-only"|"-t")
        print_status "Running tests only"
        export CI=true
        run_lint
        run_smoke_tests
        ;;
    "--help"|"-h")
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --quick, -q      Quick validation without running tests"
        echo "  --tests-only, -t Run only test validation"
        echo "  --help, -h       Show this help message"
        echo ""
        echo "Default: Run full validation including tests"
        ;;
    *)
        main
        ;;
esac