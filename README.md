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
│   ├── 04_Session_Storage/            # 2 tests — session persistence
│   │   ├── 247_SessionStorage.spec.ts
│   │   └── 249_TestVWODashboard_NoCustomReport.spec.ts
│   ├── 05_Allure_Reporting/           # 1 test — Allure integration
│   │   └── 248_TestVWODashboard.spec.ts
│   ├── 06_Multiple_Element_/          # 2 tests — multi-element handling
│   │   ├── 250_Multi_Element.spec.ts
│   │   └── 251_Multi_Element_Direct.spec.ts
│   ├── 07_WebTables/                  # 8 tests — web table interactions
│   │   ├── 252_WebTables_Dynamic_Xpath.spec.ts
│   │   ├── 253_WebTable_Dynamic.spec.ts
│   │   ├── 254_Filter_PageLoc.spec.ts
│   │   ├── 255_WebTable_Xapth.spec.ts
│   │   ├── 256_WebTable_Xapth_Pagination.spec.ts
│   │   ├── 257_WebTable_Xapth_Pagination.spec.ts
│   │   ├── 258_WebTable_Xapth_Pagination_Fn.spec.ts
│   │   └── Task_19_July.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/   # 4 tests — select, custom dropdown, advance select
│   │   ├── 259_Select.spec.ts
│   │   ├── 260_Custom_DD_Select.spec.ts
│   │   ├── 261_Advance_Select_Pro.spec.ts
│   │   └── Task_20th_July.spec.ts
│   ├── 09_Frame_Iframe/               # 3 tests — iframe interactions
│   │   ├── 262_Iframe.spec.ts
│   │   ├── 263_frameSet.spec.ts
│   │   └── 264_Iframe_part2.spec.ts
│   ├── 10_Keyboard_Hover_Drag_Drop/   # 6 tests — keyboard, hover, drag & drop
│   │   ├── 265_Keyboard.spec.ts
│   │   ├── 266_SpiceJet_Hover.spec.ts
│   │   ├── 267_Drag_Drop.spec.ts
│   │   ├── 268_Advance_Drag_Drop.spec.ts
│   │   ├── 269_Context_Menu.spec.ts
│   │   └── Task_22nd_July.spec.ts
│   ├── 11_JS_Alerts/                  # 1 test — JS dialogs
│   │   └── 270_JS.spec.ts
│   ├── 12_Handle_SVG/                 # 4 tests — SVG element handling
│   │   ├── 271_SVG.spec.ts
│   │   ├── 272_SVG_Practice.spec.ts
│   │   ├── 273_Advance_SVG.spec.ts
│   │   └── Task_24th_July.spec.ts
│   ├── 13_Shadow_DOM/                 # 1 test — Shadow DOM interactions
│   │   └── 274_Shadow_DOM.spec.ts
│   ├── 14_FileUpload/                 # 2 tests — file upload scenarios
│   │   ├── 275_File_Upload.spec.ts
│   │   └── 276_Multiple_File_Upload.spec.ts
│   ├── 15_File_Download/              # 1 test — download handling
│   │   └── 277_File_Download.spec.ts
│   ├── 16_Scroll_toElement/           # 1 test — scrolling techniques
│   │   └── 278_ScrollToView.spec.ts
│   ├── 17_Expect_Assertions/          # 4 tests + cheatsheet — expect assertions
│   │   ├── 279_Expect.spec.ts
│   │   ├── 280_Expect.spec.ts
│   │   ├── 281_Expect.spec.ts
│   │   ├── 282_Project.spec.ts
│   │   └── 283_Expect.cheatsheet.md
│   ├── 18_Test_hooks/                 # 6 tests + 2 references — hooks, groups, priority
│   │   ├── 284_Test_Hook.spec.ts
│   │   ├── 285_Chrome_Arg_List.md
│   │   ├── 286_Test_Hook_Cheatsheet.md
│   │   ├── 287_Group.spec.ts
│   │   ├── 288_Befre_After.spec.ts
│   │   ├── 289_TestDescribe.spec.ts
│   │   └── 290_TestPriority.spec.ts
│   ├── 19_Data_Driven_Testing/        # (placeholder)
│   ├── 20_Page_Object_Model/          # (placeholder)
│   ├── 21_Fixture/                    # (placeholder)
│   ├── 22_Misc_Concepts/              # (placeholder)
│   ├── 23_Advance_Framework/          # (placeholder)
│   └── Projects/                      # (placeholder)
├── utils/
│   └── CustomReporter.ts              # Custom TTA HTML reporter
├── playwright.config.ts    # Playwright configuration
├── package.json            # Node.js dependencies
├── package-lock.json       # Locked dependency versions
├── .env.example            # Environment variable template (VWO creds)
├── .gitignore              # Git ignore rules
├── test-results/           # Test execution results
├── playwright-report/      # HTML test reports
├── tta-report/             # Custom TTA reporter output
└── allure-results/         # Allure report output
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
- **Reporter**: Custom TTA reporter (`./utils/CustomReporter.ts`) + line reporter

## Tests (67 spec files)

The tests follow a **pedagogical progression** across 18 completed modules:

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

### Module 04 — Session Storage (2 tests)

| File | Description |
|------|-------------|
| `247_SessionStorage.spec.ts` | Logs into VWO, saves `storageState` to `user-session.json` using `dotenv` for env-based credentials. |
| `249_TestVWODashboard_NoCustomReport.spec.ts` | Reuses saved session to access dashboard and settings pages without re-authentication. |

### Module 05 — Allure Reporting (1 test)

| File | Description |
|------|-------------|
| `248_TestVWODashboard.spec.ts` | Same session-reuse flow as 249, but with Allure attachments (`testInfo.attach`) for screenshots at each step. Tagged `@P0 @smoke @regression`. |

### Module 06 — Multiple Elements (2 tests)

| File | Description |
|------|-------------|
| `250_Multi_Element.spec.ts` | Iterates over multiple matching elements using `allInnerTexts()`, loops through to find and click the target link. |
| `251_Multi_Element_Direct.spec.ts` | Same flow using `getByTestId` for a more direct locator approach. |

### Module 07 — WebTables (8 tests)

| File | Description |
|------|-------------|
| `252_WebTables_Dynamic_Xpath.spec.ts` | Dynamic XPath construction to find Helen Bennett's country from a static table. |
| `253_WebTable_Dynamic.spec.ts` | Structured table extraction — reads all rows from `webtable1.html` using `nth()` and `allInnerTexts()`. |
| `254_Filter_PageLoc.spec.ts` | Uses `filter({ hasText })` to locate elements, asserts element count and attribute values. |
| `255_WebTable_Xapth.spec.ts` | Finds a user row via XPath and clicks its checkbox using `preceding-sibling`. |
| `256_WebTable_Xapth_Pagination.spec.ts` | Paginated table — loops through pages using `getByTestId('next-page')` until a target name is found. |
| `257_WebTable_Xapth_Pagination.spec.ts` | Collects all emails across multiple paginated pages by clicking page buttons in sequence. |
| `258_WebTable_Xapth_Pagination_Fn.spec.ts` | Refactored pagination — reusable `findRowByName()` helper function with early-exit logic. |
| `Task_19_July.spec.ts` | Assignment — find which country Yoshi belongs to. |

### Module 08 — Select, Frames & Iframe (4 tests)

| File | Description |
|------|-------------|
| `259_Select.spec.ts` | Standard HTML `<select>` option using `page.selectOption()`. |
| `260_Custom_DD_Select.spec.ts` | Custom dropdown — clicks `getByTestId` trigger, picks `getByRole` option. |
| `261_Advance_Select_Pro.spec.ts` | Advance select — single searchable, multi-chip, creatable, async (city autocomplete). |
| `Task_20th_July.spec.ts` | Assignment — SpiceJet origin/destination selection using `getByTestId` locators with text fill. |

### Module 09 — Frames & Iframes (3 tests)

| File | Description |
|------|-------------|
| `262_Iframe.spec.ts` | Interacts with an iframe on TTA — fills vehicle registration form fields and clicks submit. |
| `263_frameSet.spec.ts` | Multi-frame page — navigates between `main` and `side` frames, prints all frame attributes. |
| `264_Iframe_part2.spec.ts` | Nested iframes on SelectorsHub — fills inputs across 3 levels of iframe nesting (`#pact1` > `#pact2` > `#pact3`). |

### Module 10 — Keyboard, Hover & Drag & Drop (6 tests)

| File | Description |
|------|-------------|
| `265_Keyboard.spec.ts` | Keyboard events on keycode.info — presses `A`, `ArrowLeft`, `Shift+O`, tests `keyboard.up()`/`down()`. |
| `266_SpiceJet_Hover.spec.ts` | Hover over SpiceJet's "Add-ons" menu and clicks "FlyEarly" submenu item. |
| `267_Drag_Drop.spec.ts` | Basic drag & drop on the-internet.herokuapp.com — drags column A onto column B. |
| `268_Advance_Drag_Drop.spec.ts` | Kanban-style drag & drop on TTA — moves cards between "in-progress" and "review" columns. |
| `269_Context_Menu.spec.ts` | Right-click context menu on TTA — opens menu, lists all options, clicks "Copy". |
| `Task_22nd_July.spec.ts` | Assignment — hovers "Add-ons" nav item, clicks "Wifi" submenu, logs all submenu items. |

### Module 11 — JS Alerts (1 test)

| File | Description |
|------|-------------|
| `270_JS.spec.ts` | Covers all three JS dialog types: alert (accept), confirm (accept/dismiss), prompt (enter text + accept). Uses `page.on('dialog')` handler pattern. |

### Module 12 — Handle SVG (4 tests)

| File | Description |
|------|-------------|
| `271_SVG.spec.ts` | Flipkart search via SVG — fills search box, clicks the SVG search button, extracts product titles from results grid. |
| `272_SVG_Practice.spec.ts` | TTA SVG widgets — clicks SVG circle shape, validates output, interacts with bar chart and radio buttons. |
| `273_Advance_SVG.spec.ts` | India map SVG on simplemaps.com — iterates all state `<path>` elements using XPath with `name()`, clicks a target state. |
| `Task_24th_July.spec.ts` | Assignment — Flipkart macmini search, extracts all product titles, parses prices, and prints the cheapest one. |

### Module 13 — Shadow DOM (1 test)

| File | Description |
|------|-------------|
| `274_Shadow_DOM.spec.ts` | TTA Shadow DOM page — fills email/password in a shadow card, clicks increment on a counter widget, and fills inputs inside a nested shadow host. |

### Module 14 — File Upload (2 tests)

| File | Description |
|------|-------------|
| `275_File_Upload.spec.ts` | Single file upload on the-internet.herokuapp.com — sets input file from `testdata.txt`, submits, verifies "File Uploaded!" heading. |
| `276_Multiple_File_Upload.spec.ts` | PatternFly multiple file upload — uses `setInputFiles` with name/mimeType/buffer objects for two JPEG files. |

### Module 15 — File Download (1 test)

| File | Description |
|------|-------------|
| `277_File_Download.spec.ts` | TTA upload-download widget — waits for the `download` event via `Promise.all`, then `saveAs()` into the `out/` directory. |

### Module 16 — Scroll to Element (1 test)

| File | Description |
|------|-------------|
| `278_ScrollToView.spec.ts` | TTA scroll page — demonstrates `scrollIntoViewIfNeeded()`, `window.scrollBy()`, `window.scrollTo()`, and `expect.poll()` to wait for a lazy list to grow past its initial item count. |

### Module 17 — Expect Assertions (4 tests)

| File | Description |
|------|-------------|
| `279_Expect.spec.ts` | Value assertions — `toBe`, `toBeTruthy`/`toBeFalsy`, `toBeNull`, `toBeGreaterThan`, `toEqual` (including object key-order independence). |
| `280_Expect.spec.ts` | Locator-based assertions — `toBeVisible`, `toContainText`, `toHaveAttribute`, `toHaveCount` on the TTA multiple-element filter page. |
| `281_Expect.spec.ts` | Soft assertions & negation — `expect.soft` records failures without stopping, then hard assertions and `.not` checks run after. |
| `282_Project.spec.ts` | Project assertions — `toBeChecked` (unchecked), `toBeVisible`, `toBeEnabled`, `toHaveTitle`, `toContain` on the TTA practice page. |
| `283_Expect.cheatsheet.md` | Interview cheatsheet covering every common `expect` assertion — value, locator, page, API response, modifiers (`not`, `soft`, `poll`, `toPass`). |

### Module 18 — Test Hooks (6 tests)

| File | Description |
|------|-------------|
| `284_Test_Hook.spec.ts` | Test modifiers — `test.skip(condition)`, `test.slow(condition)`, `test.fixme`, `test.fail()` with browser-conditional examples. |
| `285_Chrome_Arg_List.md` | Reference of Chromium command-line arguments grouped by purpose — window/display, headless, security, network, permissions, CI stability, plus copy-paste configs. |
| `286_Test_Hook_Cheatsheet.md` | Test API cheatsheet — `test()` variants, suites, hook order (`beforeAll` → `beforeEach` → … → `afterAll`), fixtures, and `test.info()`. |
| `287_Group.spec.ts` | `test.step()` — splits a login validation flow into named, reporting-friendly steps. |
| `288_Befre_After.spec.ts` | Hooks lifecycle — `beforeAll`/`beforeEach`/`afterEach`/`afterAll`, with `afterEach` saving a failure screenshot to `out/` when status differs. |
| `289_TestDescribe.spec.ts` | `test.describe.serial` — ordered checkout suite vs. standalone parallel tests. |
| `290_TestPriority.spec.ts` | Test priority — `test.describe.configure({ mode: 'serial' })` and `@p1/@p2/@p3` tags runnable via `--grep @p1`. |

### Future Modules (placeholders)

Directories `19_Data_Driven_Testing` through `23_Advance_Framework` plus `Projects` are set up as placeholders for upcoming topics including Data-Driven Testing, Page Object Model, and more.

## Useful Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright GitHub](https://github.com/microsoft/playwright)

## License

ISC

---

Happy Testing! 🎭
