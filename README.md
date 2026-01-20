Cypress Automation Test Suite – Matching Engine Website
Project Overview

This repository contains automated end-to-end (E2E) test cases for the Matching Engine website using Cypress.
The goal of this test suite is to validate critical user journeys, navigation, and content visibility for the Repertoire Management Module.

 Test Scope

The following areas are covered:

Website launch and availability

Modules menu interaction

Navigation to Repertoire Management module

Visibility of Additional Features section

Expansion of Products Supported section

Validation of supported products list

Tech Stack

Automation Tool: Cypress

Language: JavaScript

Test Type: End-to-End (E2E)

Browser: Google Chrome

📂 Project Structure (Recommended)
cypress/
 ├── e2e/
 │    └── matchingEngine/
 │         └── repertoireManagement.cy.js
 ├── Pages/
 │    └── homePage.js
 │    └── repertoireManagementPage.js
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
cypress.config.js
package.json
README.md

▶️ Prerequisites

Before running the tests, ensure the following:

Node.js (LTS version) installed

Google Chrome installed

Matching Engine website accessible:
https://www.matchingengine.com/

📥 Installation

Clone the repository:

git clone <repository-url>


Navigate to the project directory:

cd matching-engine-cypress


Install dependencies:

npm install

Running Tests
Open Cypress Test Runner
npx cypress open

Run Tests in Headless Mode
npx cypress run --browser chrome

Test Cases Covered
TC01 – Verify Website Launch Successfully

Objective: Ensure Matching Engine website loads successfully

Expected Result: Home page loads with header visible

TC02 – Verify Modules Menu Opens Successfully

Objective: Ensure Modules menu expands correctly

Expected Result: Modules dropdown menu is displayed

TC03 – Verify Repertoire Management Module Navigation

Objective: Ensure navigation to Repertoire Management module page

Expected Result: User lands on correct module page

TC04 – Verify Additional Features Section Visibility

Objective: Ensure Additional Features section is reachable

Expected Result: Section is visible upon scrolling

TC05 – Verify Products Supported Section

Objective: Ensure Products Supported section expands

Expected Result: Products Supported content is displayed

TC06 – Verify Supported Products List

Objective: Validate supported products list

Expected Result: Displayed list matches expected supported products

🌐 Browser Coverage

Google Chrome (Primary)

👤 Test Ownership

Assigned QA: Bushra Qaisar