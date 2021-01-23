const { displayName, name } = require("./package.json");

const styleFiles = "\\.(css|sass)$";
const webResources = "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$";

module.exports = {
  displayName,
  name,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleDirectories: ["node_modules", "src"],
  roots: ["<rootDir>/src"],
  setupFiles: [
    '<rootDir>/tests/setup/enzyme.setup.js',
    '<rootDir>/tests/setup/localstorage.setup.js',
    '<rootDir>/tests/setup/mocks.setup.js'
  ],
  verbose: true,
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.test.{js,jsx}",
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/.next',
    '<rootDir>/pages',
  ],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    [webResources]: "<rootDir>/tests/__mocks__/assetMocks.js",
    [styleFiles]: "<rootDir>/tests/__mocks__/assetMocks.js",
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
  },
};