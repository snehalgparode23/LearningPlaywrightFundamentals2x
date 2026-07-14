# Learning Playwright Fundamentals 2x

This repository contains learning materials and practice tests for **Playwright**, a modern end-to-end testing framework for web applications.

## About Playwright

Playwright enables reliable testing across all modern browsers including Chromium, Firefox, and WebKit. It supports multiple programming languages, with this repository focusing on **TypeScript**.

## Project Structure

```
LearningPlaywrightFundamentals2x/
├── tests/
│   ├── example.spec.ts                # Playwright boilerplate sample
│   ├── Template.spec.ts               # Empty test template scaffold
│   ├── 01_Basics/                     # 2 tests — basic setup
│   │   ├── 229_Basic_Test.spec.ts
│   │   └── 230_Test_Annoations.spec.ts
│   ├── 02_first_tests/                # 8 tests — BCP model, test runner
│   │   ├── 231_First_Running_Verify.spec.ts
│   │   ├── 232_BCP.spec.ts
│   │   ├── 233_BCP_MultipeContext.spec.ts
│   │   ├── 234_BCP_Multiple_Pages.spec.ts
│   │   ├── 235_TEST_I_PW.spec.ts
│   │   ├── 236_BCP_TEST_PW.spec.ts
│   │   ├── 237_BCP_Test_Options.spec.ts
│   │   └── Task_6th_July.spec.ts
│   ├── 03_Locators_Commands/          # 11 tests — locators & commands
│   │   ├── 238_LS.spec.ts
│   │   ├── 239_Project_VWO_Login.spec.ts
│   │   ├── 240_Xpath.spec.ts
│   │   ├── 241_Project_3_Singup_VWO.spec.ts
│   │   ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts
│   │   ├── 243_PW_Command.spec.ts
│   │   ├── 244_Refere_PW.spec.ts
│   │   ├── 245_GetByRole_PW.spec.ts
│   │   ├── 246_PressSeq.spec.ts
│   │   └── Task_10_Jul.spec.ts
│   ├── 04_Session_Storage/            # (placeholder)
│   ├── 05_Allure_Reporting/           # (placeholder)
│   ├── 06_Multiple_Element_/          # (placeholder)
│   ├── 07_WebTables/                  # (placeholder)
│   ├── 08_Web_Select_Frames_Iframe/   # (placeholder)
│   ├── 09_Frame_Iframe/               # (placeholder)
│   ├── 10_Keyboard_Hover_Drag_Drop/   # (placeholder)
│   ├── 11_JS_Alerts/                  # (placeholder)
│   ├── 12_Handle_SVG/                 # (placeholder)
│   ├── 13_Shadow_DOM/                 # (placeholder)
│   ├── 14_FileUpload/                 # (placeholder)
│   ├── 15_File_Download/              # (placeholder)
│   ├── 16_Scroll_toElement/           # (placeholder)
│   ├── 17_Expect_Assertions/          # (placeholder)
│   ├── 18_Test_hooks/                 # (placeholder)
│   ├── 19_Data_Driven_Testing/        # (placeholder)
│   ├── 20_Page_Object_Model/          # (placeholder)
│   ├── 21_Fixture/                    # (placeholder)
│   ├── 22_Misc_Concepts/              # (placeholder)
│   ├── 23_Advance_Framework/          # (placeholder)
│   └── Projects/                      # (placeholder)
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
- **Browsers**: Chromium only (Firefox, WebKit commented out)
- **Parallel execution**: Tests run in parallel locally
- **Headless**: `false` (runs headed by default)
- **Screenshots**: `on` (captured for every test)
- **Video**: `on` (recorded for every test)
- **Trace**: `on` (captured every run)
- **Viewport**: 1920×1080
- **Retries**: 0 locally, 2 on CI
- **Reporter**: HTML reporter

## Tests (22 spec files)

The tests follow a **pedagogical progression** across 3 completed modules:

### Module 01 — Basics (2 tests)

| File | Description |
|------|-------------|
| `229_Basic_Test.spec.ts` | First test — navigates to VWO login, verifies title and logo visibility. Introduces `page.locator()`. |
| `230_Test_Annoations.spec.ts` | Covers `test.skip`, `test.only`, `test.fail`, `test.slow`, and conditional skips. |

### Module 02 — First Tests (8 tests)

| File | Description |
|------|-------------|
| `231_First_Running_Verify.spec.ts` | First real test run against VWO login page. |
| `232_BCP.spec.ts` | Browser-Context-Page hierarchy using raw Playwright API. |
| `233_BCP_MultipeContext.spec.ts` | Multiple browser contexts simulating admin & viewer isolation. |
| `234_BCP_Multiple_Pages.spec.ts` | Multiple tabs sharing the same browser context. |
| `235_TEST_I_PW.spec.ts` | Playwright test runner fixtures (`{ page }`) — two isolated tests. |
| `236_BCP_TEST_PW.spec.ts` | Browser fixture (`{ browser }`) with manual context creation. |
| `237_BCP_Test_Options.spec.ts` | Context options — desktop locale/geolocation config + mobile emulation. |
| `Task_6th_July.spec.ts` | Assignment — two contexts navigating to different sites. |

### Module 03 — Locators & Commands (11 tests)

| File | Description |
|------|-------------|
| `238_LS.spec.ts` | Simple page launch to TTA cart site. |
| `239_Project_VWO_Login.spec.ts` | VWO login error validation using CSS selectors. |
| `240_Xpath.spec.ts` | Empty placeholder for XPath examples. |
| `241_Project_3_Singup_VWO.spec.ts` | VWO signup error validation using XPath locators. |
| `242_Project_3_Singup_VWO_PW_Locator.spec.ts` | Same signup test using Playwright-native locators (`getByRole`). |
| `243_PW_Command.spec.ts` | `waitUntil` options: `"commit"`, `"domcontentloaded"`, `"load"`, `"networkidle"`. |
| `244_Refere_PW.spec.ts` | Navigation with custom `referer` header. |
| `245_GetByRole_PW.spec.ts` | `getByRole` locator for accessible element selection. |
| `246_PressSeq.spec.ts` | `pressSequentially` with 200ms delay + `goBack()` navigation. |
| `Task_10_Jul.spec.ts` | Full CURA Healthcare end-to-end booking flow. |

### Future Modules (placeholders)

Directories `04_Session_Storage` through `23_Advance_Framework` plus `Projects` are set up as placeholders for upcoming topics including WebTables, Frames, Alerts, SVG, Shadow DOM, File Upload/Download, Page Object Model, and more.

## Useful Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright GitHub](https://github.com/microsoft/playwright)

## License

ISC

---

Happy Testing! 🎭
