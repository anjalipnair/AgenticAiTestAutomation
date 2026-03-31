#!/bin/bash
# Automated Defect Logging Script for Jira Integration
set -e

echo "🎯 Running automated test and defect logging..."

# Run tests and capture results
npm test -- --reporter=json > test-results.json 2>/dev/null || echo "Tests completed with failures"

# Check if there are any test failures to log
if [ -f "test-results.json" ] && grep -q '"state":"failed"' test-results.json; then
    echo "📝 Test failures detected, logging to Jira..."
    node scripts/jira-defect-logger.js
else
    echo "✅ No test failures to log"
fi

# Clean up temporary files
rm -f test-results.json

echo "🎉 Automated defect logging completed!"