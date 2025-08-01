const nextJest = require('next/jest');

// Ensure required environment variables are set for Next.js config
process.env.NEWS_API_URL = process.env.NEWS_API_URL || 'http://localhost';

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
};

module.exports = createJestConfig(customJestConfig);
