# Use the official Playwright Docker image
FROM mcr.microsoft.com/playwright:v1.40.0-focal

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Install Playwright browsers (optional, as base image has them)
RUN npx playwright install --with-deps

# Create directories for test results
RUN mkdir -p test-results playwright-report

# Set environment variables
ENV CI=true
ENV TEST_ENV=demo

# Expose port for potential web server (optional)
EXPOSE 3000

# Default command - can be overridden
CMD ["npm", "test"]

# Labels for better image management
LABEL maintainer="OpenCart Test Automation Team"
LABEL version="1.0.0"
LABEL description="Containerized OpenCart test automation with Playwright"