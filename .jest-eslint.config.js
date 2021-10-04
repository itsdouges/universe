// @flow strict

// https://jestjs.io/docs/en/configuration
module.exports = {
  displayName: 'eslint',
  rootDir: __dirname,
  verbose: false,
  runner: 'jest-runner-eslint',
  testMatch: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/scripts/**/*.js',
    '<rootDir>/*.js', // root JS files
  ],
  testPathIgnorePatterns: [
    '/node_modules/',

    // The only reason why this is here is because Jest fails on unrelated .snap files generated by Rust Insta.
    // See: https://github.com/facebook/jest/issues/8922
    '<rootDir>/src/abacus/',
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
