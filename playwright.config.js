import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 45 * 1000,
  expect: {
    timeout: 10 * 1000
  },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://nex-kart-fullstack-ecommerce-applic.vercel.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',
    headless: false,
    
    // Slows down execution so you can watch every action clearly
    launchOptions: {
      slowMo: 1000, // 1000ms = 1 second delay per action (try 500 for half a second)
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});