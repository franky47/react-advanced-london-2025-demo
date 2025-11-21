import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      screenshotFailures: false,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [
        {
          browser: 'chromium',
          testTimeout: 1000,
        },
      ],
    },
  },
})
