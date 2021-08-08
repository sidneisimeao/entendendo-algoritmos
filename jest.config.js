module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // "__tests__/**/*.js",
    //"functions/**/*.js",
    //"components/**/*.js",
    //"pages/**/*.js",
  ],
  coverageReporters: ["lcov", "text"],
};
