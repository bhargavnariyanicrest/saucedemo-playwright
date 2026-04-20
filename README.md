# Sauce Demo – Playwright Automation

Automated test suite for the [Sauce Demo](https://www.saucedemo.com) shopping-cart workflow, built with **Playwright** and **TypeScript**.

## Scenario Covered

The test automates and verifies the following end-to-end workflow:

1. **Authenticate** as `standard_user` (Username: `standard_user` | Password: `secret_sauce`).
2. **Add** the "Sauce Labs Backpack" to the shopping cart.
3. **Navigate** to the cart page.
4. **Assert** the item is present in the cart.
5. **Assert** the "Checkout" button is visible and enabled.

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9

## Getting Started

```bash
# Install project dependencies
npm ci

# Install Playwright browsers
npx playwright install
```

## Environment Configuration

The framework uses `dotenv` to load environment overrides from a local `.env` file. All variables have sensible fallback values, so the suite runs out of the box without any `.env` file.

To customise, copy the example file and edit as needed:

```bash
cp .env.example .env
```

| Variable         | Default                        | Description                  |
| ---------------- | ------------------------------ | ---------------------------- |
| `BASE_URL`       | `https://www.saucedemo.com`    | Application under test URL   |
| `SAUCE_USERNAME`  | `standard_user`                | Login username               |
| `SAUCE_PASSWORD`  | `secret_sauce`                 | Login password               |

## Running Tests

```bash
npm test                 # headless run (default)
npm run test:headed      # headed browser for debugging
npm run test:ui          # Playwright UI mode
npm run report           # open last HTML report
```

## Project Structure

```
├── fixtures/
│   └── testfixtures.ts          # Custom Playwright fixtures — injects page objects into tests
├── pages/
│   ├── BasePage.ts              # Abstract base class with shared navigation and assertion helpers
│   ├── LoginPage.ts             # Login page locators and actions
│   ├── InventoryPage.ts         # Product listing page locators and actions
│   └── CartPage.ts              # Cart page locators and assertions
├── tests/
│   ├── auth.setup.ts            # Playwright setup project — authenticates once and saves state
│   └── cart-workflow.spec.ts    # Main test spec for the shopping cart workflow
├── utils/
│   ├── constants.ts             # Centralised URLs, credentials, product names, and auth file path
│   └── env.ts                   # dotenv loader with fallback helper
├── playwright.config.ts         # Playwright configuration (projects, timeouts, reporters, artifacts)
└── tsconfig.json                # TypeScript compiler options
