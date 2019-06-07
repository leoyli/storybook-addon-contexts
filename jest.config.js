const config = {
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.{js,ts,jsx,tsx}',
    '!**/*.stories.{js,ts,jsx,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: '<rootDir>/.test/coverage',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./enzyme.config.js'],
  verbose: true,
};

module.exports = config;
