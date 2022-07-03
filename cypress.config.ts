import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents (on, config) {

    },
    baseUrl: 'https://wine-challenge-pqsw3wk37-tinho1123.vercel.app/'
  }
})
