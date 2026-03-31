#!/bin/bash
# AICommunityDemo Terminal Setup
# Source this file to get useful aliases and functions for test automation

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project variables
export PROJECT_ROOT="/Users/anjali.nair/Desktop/AICommunityDemo"
export JIRA_PROJECT="DM06032026"
export JIRA_URL="https://mercator-team-nair.atlassian.net"
export DASHBOARD_URL="http://localhost:8083"

# Navigate to project root
cd "$PROJECT_ROOT"

echo -e "${GREEN}🚀 AICommunityDemo Terminal Environment Loaded${NC}"
echo -e "${BLUE}📁 Project Root: $PROJECT_ROOT${NC}"
echo -e "${YELLOW}🎯 Jira Project: $JIRA_PROJECT${NC}"
echo -e "${PURPLE}📊 Dashboard: $DASHBOARD_URL${NC}"

# Useful aliases for test automation
alias pw='npx playwright'
alias pwtest='npx playwright test'
alias pwui='npx playwright test --ui'
alias pwheaded='npx playwright test --headed'
alias pwreport='npx playwright show-report'
alias pwdebug='npx playwright test --debug'

# Dashboard aliases
alias dashboard='cd dashboard && python3 -m http.server 8083'
alias refresh-dash='cd dashboard && ./refresh-dashboard.sh'
alias open-dash='open http://localhost:8083/interactive-test-dashboard.html'

# Jira integration aliases
alias jira-test='npm run jira:test-and-log'
alias jira-log='npm run jira:log-defects'
alias jira-help='npm run help:jira'

# Git aliases for test automation
alias git-status='git status'
alias git-add-tests='git add tests/'
alias git-commit-test='git commit -m "test: "'

# Test execution shortcuts
alias test-login='npx playwright test tests/login/'
alias test-all='npx playwright test tests/'
alias test-json='npx playwright test --reporter=json'
alias test-html='npx playwright test --reporter=html'

# Dashboard management
alias start-servers='npm run serve-all-dashboards'
alias stop-servers='pkill -f "python.*http.server"'

# Utility functions
test-and-jira() {
    echo -e "${YELLOW}🔄 Running tests and logging failures to Jira...${NC}"
    npm run jira:test-and-log
}

quick-test() {
    local test_file="$1"
    if [ -z "$test_file" ]; then
        echo -e "${RED}❌ Please provide a test file path${NC}"
        echo -e "${BLUE}Usage: quick-test tests/login/test-name.spec.ts${NC}"
        return 1
    fi
    echo -e "${YELLOW}🚀 Running: $test_file${NC}"
    npx playwright test "$test_file"
}

open-jira() {
    local issue="$1"
    if [ -z "$issue" ]; then
        echo -e "${BLUE}🔗 Opening Jira project board...${NC}"
        open "https://mercator-team-nair.atlassian.net/jira/software/c/projects/DM06032026/boards/199/backlog"
    else
        echo -e "${BLUE}🔗 Opening Jira issue: $issue${NC}"
        open "https://mercator-team-nair.atlassian.net/browse/$issue"
    fi
}

show-help() {
    echo -e "${GREEN}=== AICommunityDemo Test Automation Commands ===${NC}"
    echo -e ""
    echo -e "${YELLOW}🧪 Test Execution:${NC}"
    echo -e "  ${BLUE}pwtest${NC}              - Run all Playwright tests"
    echo -e "  ${BLUE}test-login${NC}          - Run login tests only"
    echo -e "  ${BLUE}test-all${NC}            - Run all tests"
    echo -e "  ${BLUE}quick-test <file>${NC}   - Run specific test file"
    echo -e "  ${BLUE}pwui${NC}                - Run tests with UI mode"
    echo -e "  ${BLUE}pwheaded${NC}            - Run tests in headed mode"
    echo -e "  ${BLUE}pwdebug${NC}             - Debug tests"
    echo -e ""
    echo -e "${YELLOW}📊 Dashboard:${NC}"
    echo -e "  ${BLUE}dashboard${NC}           - Start dashboard server"
    echo -e "  ${BLUE}refresh-dash${NC}        - Refresh dashboard data"
    echo -e "  ${BLUE}open-dash${NC}           - Open dashboard in browser"
    echo -e ""
    echo -e "${YELLOW}🎟️ Jira Integration:${NC}"
    echo -e "  ${BLUE}jira-test${NC}           - Run tests and log failures to Jira"
    echo -e "  ${BLUE}jira-log${NC}            - Log existing failures to Jira"
    echo -e "  ${BLUE}test-and-jira${NC}       - Complete test + Jira workflow"
    echo -e "  ${BLUE}open-jira [issue]${NC}   - Open Jira board or specific issue"
    echo -e ""
    echo -e "${YELLOW}🔧 Utilities:${NC}"
    echo -e "  ${BLUE}pwreport${NC}            - Open test report"
    echo -e "  ${BLUE}start-servers${NC}       - Start all dashboard servers"
    echo -e "  ${BLUE}stop-servers${NC}        - Stop all dashboard servers"
    echo -e "  ${BLUE}show-help${NC}           - Show this help message"
}

# Display help on load
show-help

# Set custom prompt
export PS1="\[\e[1;36m\]AICommunityDemo\[\e[0m\] \[\e[1;32m\]\w\[\e[0m\] \[\e[1;33m\]$\[\e[0m\] "