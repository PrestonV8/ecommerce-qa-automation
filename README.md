# ecommerce-qa-automation

An end-to-end test automation suite for a standard e-commerce checkout flow, built with Playwright and TypeScript. This project validates critical user journeys — from login through to order completion — using the Page Object Model (POM) design pattern.

---

## Business Value

Checkout flows are the highest-stakes part of any e-commerce application. A single bug in the purchase path directly translates to lost revenue and damaged customer trust. Manual regression testing of these flows is time-consuming and error-prone, especially across releases.

This automated suite addresses that risk by:

- **Catching regressions instantly** — tests run on every code push via CI/CD, catching breaking changes before they reach production
- **Reducing manual QA effort** — core checkout scenarios are verified automatically, freeing QA engineers to focus on exploratory testing
- **Improving release confidence** — teams can ship faster knowing critical paths are covered
- **Cross-browser coverage** — tests run across Chromium, Firefox, and WebKit, reducing browser-specific bug risk

---

## Features

- Login validation (valid, invalid, and locked-out users)
- Product listing and sorting verification
- Add to cart and cart badge count assertions
- Full end-to-end checkout flow
- Negative and edge case testing (empty fields, mid-flow cart removal)
- Cross-browser execution (Chromium, Firefox, WebKit)
- HTML test report generation
- CI/CD pipeline via GitHub Actions

---

## Project Structure

```
ecommerce-qa-automation/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── .github/
│   └── workflows/
│       └── playwright.yml
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Tools & Technologies

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | End-to-end browser automation framework |
| TypeScript | Typed test authoring for reliability and readability |
| Page Object Model (POM) | Design pattern for maintainable, reusable test code |
| Playwright HTML Reporter | Visual test reporting with pass/fail breakdowns |
| GitHub Actions | CI/CD pipeline — runs tests on every push and pull request |

---

## Skills Practiced

- **Test planning** — identifying critical user journeys and prioritizing test coverage by business impact
- **End-to-end automation** — writing reliable browser-based tests covering real user flows
- **Page Object Model** — structuring tests for reusability and long-term maintainability
- **Negative & edge case testing** — validating error states, empty inputs, and boundary conditions
- **Cross-browser testing** — running the same suite across multiple browser engines
- **API & network awareness** — understanding how UI actions relate to underlying network requests
- **CI/CD integration** — automating test execution on every code change using GitHub Actions
- **Test reporting** — generating and publishing human-readable HTML reports

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
git clone https://github.com/your-username/ecommerce-qa-automation.git
cd ecommerce-qa-automation
npm install
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (watch the browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/checkout.spec.ts

# Run tests on a specific browser
npx playwright test --project=firefox
```

### Viewing the Report

```bash
npx playwright show-report
```

---

## Target Application

Tests run against **[SauceDemo](https://www.saucedemo.com)** — a demo e-commerce site maintained by Sauce Labs, purpose-built for QA practice. It includes multiple user types that simulate real-world conditions including performance degradation and broken UI states.

| Username | Behavior |
|---|---|
| `standard_user` | Normal happy path |
| `locked_out_user` | Blocked login |
| `problem_user` | Broken UI elements |
| `performance_glitch_user` | Simulated slow response |

---

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions. The workflow installs dependencies, runs the full suite across all configured browsers, and uploads the HTML report as a build artifact.

See `.github/workflows/playwright.yml` for the full configuration.

