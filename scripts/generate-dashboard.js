// Dashboard Generator for Test Results
const fs = require('fs');
const path = require('path');

class DashboardGenerator {
    constructor() {
        this.outputDir = 'dashboard';
        this.testResultsDir = 'test-results';
        this.reportDir = 'playwright-report';
    }

    async generateDashboard() {
        console.log('📊 Generating test dashboard...');
        
        // Ensure dashboard directory exists
        this.ensureDirectoryExists(this.outputDir);
        
        // Generate main dashboard
        const dashboardData = await this.collectTestData();
        const dashboardHtml = this.generateDashboardHtml(dashboardData);
        
        // Write dashboard files
        fs.writeFileSync(path.join(this.outputDir, 'index.html'), dashboardHtml);
        fs.writeFileSync('interactive-test-dashboard.html', dashboardHtml);
        
        console.log('✅ Dashboard generated successfully!');
        console.log(`📂 Output: ${this.outputDir}/index.html`);
        console.log(`🌐 Interactive: interactive-test-dashboard.html`);
    }

    ensureDirectoryExists(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    async collectTestData() {
        const data = {
            timestamp: new Date().toISOString(),
            totalTests: 0,
            passedTests: 0,
            failedTests: 0,
            executionTime: '0s',
            testResults: [],
            summary: {}
        };

        try {
            // Check for test results
            if (fs.existsSync(this.testResultsDir)) {
                const resultFiles = fs.readdirSync(this.testResultsDir);
                data.totalTests = resultFiles.length;
                data.passedTests = resultFiles.filter(f => !f.includes('failed')).length;
                data.failedTests = resultFiles.length - data.passedTests;
            }

            // Try to read Playwright report data
            if (fs.existsSync(path.join(this.reportDir, 'report.json'))) {
                const reportData = JSON.parse(fs.readFileSync(path.join(this.reportDir, 'report.json'), 'utf8'));
                data.summary = reportData.stats || {};
            }

        } catch (error) {
            console.warn('⚠️ Could not read test results:', error.message);
        }

        return data;
    }

    generateDashboardHtml(data) {
        const passRate = data.totalTests > 0 ? ((data.passedTests / data.totalTests) * 100).toFixed(1) : 100;
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎯 Test Dashboard - SauceDemo Automation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 20px;
        }
        .header h1 { 
            color: #333;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .timestamp {
            color: #666;
            font-size: 1.1em;
        }
        .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .metric-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border-left: 5px solid;
        }
        .metric-card.success { border-color: #10b981; }
        .metric-card.danger { border-color: #ef4444; }
        .metric-card.info { border-color: #3b82f6; }
        .metric-card.warning { border-color: #f59e0b; }
        
        .metric-value {
            font-size: 3em;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .metric-value.success { color: #10b981; }
        .metric-value.danger { color: #ef4444; }
        .metric-value.info { color: #3b82f6; }
        .metric-value.warning { color: #f59e0b; }
        
        .metric-label {
            font-size: 1.1em;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .progress-circle {
            margin: 20px auto;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: conic-gradient(#10b981 0deg ${(passRate * 3.6)}deg, #e5e7eb ${(passRate * 3.6)}deg);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .progress-circle::before {
            content: '${passRate}%';
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            color: #666;
        }
        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 10px 0;
        }
        .status-success { background: #10b981; color: white; }
        .status-danger { background: #ef4444; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 SauceDemo Test Dashboard</h1>
            <div class="timestamp">Last Updated: ${new Date(data.timestamp).toLocaleString()}</div>
            <div class="status-badge ${data.failedTests === 0 ? 'status-success' : 'status-danger'}">
                ${data.failedTests === 0 ? '✅ All Tests Passing' : '❌ Tests Failing'}
            </div>
        </div>
        
        <div class="metrics">
            <div class="metric-card info">
                <div class="metric-value info">${data.totalTests}</div>
                <div class="metric-label">Total Tests</div>
            </div>
            <div class="metric-card success">
                <div class="metric-value success">${data.passedTests}</div>
                <div class="metric-label">Passed</div>
            </div>
            <div class="metric-card ${data.failedTests > 0 ? 'danger' : 'success'}">
                <div class="metric-value ${data.failedTests > 0 ? 'danger' : 'success'}">${data.failedTests}</div>
                <div class="metric-label">Failed</div>
            </div>
            <div class="metric-card warning">
                <div class="progress-circle"></div>
                <div class="metric-label">Pass Rate</div>
            </div>
        </div>
        
        <div class="footer">
            <p>🚀 <strong>SauceDemo Test Automation Suite</strong></p>
            <p>Comprehensive end-to-end testing with real-time reporting</p>
            <p><a href="https://github.com/anjalipnair/AgenticAiTestAutomation" style="color: #667eea;">View Repository</a></p>
        </div>
    </div>
</body>
</html>`;
    }
}

// Run if called directly
if (require.main === module) {
    const generator = new DashboardGenerator();
    generator.generateDashboard()
        .then(() => process.exit(0))
        .catch(error => {
            console.error('❌ Dashboard generation failed:', error);
            process.exit(1);
        });
}

module.exports = DashboardGenerator;