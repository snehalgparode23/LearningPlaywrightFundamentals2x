# Learning Playwright Fundamentals 2x

This repository contains learning materials and practice tests for **Playwright**, a modern end-to-end testing framework for web applications.

## About Playwright

Playwright enables reliable testing across all modern browsers including Chromium, Firefox, and WebKit. It supports multiple programming languages, with this repository focusing on **TypeScript**.

## Project Structure

```
LearningPlaywrightFundamentals2x/
├── tests/
│   └── example.spec.ts    # Sample Playwright tests
├── playwright.config.ts    # Playwright configuration
├── package.json            # Node.js dependencies
├── package-lock.json       # Locked dependency versions
├── .gitignore              # Git ignore rules
├── test-results/           # Test execution results
└── playwright-report/      # HTML test reports
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/snehalgparode23/LearningPlaywrightFundamentals2x.git
   cd LearningPlaywrightFundamentals2x
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Run tests in a specific browser:
  ```bash
  npx playwright test --project=chromium
  ```

- Open HTML report:
  ```bash
  npx playwright show-report
  ```

## Test Configuration

The `playwright.config.ts` file configures:
- **Browsers**: Chromium, Firefox, WebKit
- **Parallel execution**: Tests run in parallel locally
- **Retries**: 2 retries on CI, 0 locally
- **Workers**: 1 worker on CI, auto-detected locally
- **Reporter**: HTML reporter

## Sample Tests

The `tests/example.spec.ts` file includes two sample tests against [playwright.dev](https://playwright.dev):

1. **Page Title Test**: Verifies the page title contains "Playwright"
2. **Navigation Test**: Clicks "Get started" and verifies the "Installation" heading is visible

## Useful Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright GitHub](https://github.com/microsoft/playwright)

## License

ISC

---

Happy Testing! 🎭
