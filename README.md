# NexKart-Full-Stack-E-Commerce-Test-Automation-AI-Documentation

End-to-end browser test automation and visual artifact generation for the NexKart full-stack e-commerce web platform using Playwright and Multimodal Generative AI.

## Features
- **End-to-End E-Commerce Coverage:** Automates core customer journeys, including catalog browsing, product search, cart actions, and checkout flows.
- **Resilient UI Locators:** Handles asynchronous DOM updates and dynamic elements reliably across execution cycles.
- **Visual Artifact Capture:** Records full-resolution browser execution sessions for QA validation and regression verification.
- **AI-Assisted Requirements Engineering:** Converts automated video execution artifacts into structured Functional Requirements Documents (FRD) using Multimodal AI workflows.

## Tech Stack
- **Framework:** Playwright (`@playwright/test`)
- **Language/Runtime:** JavaScript (ES6+), Node.js
- **Target Application:** https://nex-kart-fullstack-ecommerce-applic.vercel.app
- **AI Tooling:** Multimodal Generative AI (Video-to-FRD)

## Setup & Installation

1. Navigate to the project directory:
   cd nexkart-automation

2. Install dependencies:
   npm install

3. Install Playwright browser binaries:
   npx playwright install chromium

## Running Tests & Recordings

- Run standard Playwright tests:
  npx playwright test

- View the HTML test report:
  npx playwright show-report

- Run the standalone walkthrough recorder:
  node record-nexkart.js
