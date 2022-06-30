const { defaults } = require("jest-config");

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: { "^.+\\.(css|less|scss)$": "identity-obj-proxy" },
  testEnvironment: "jsdom",
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/**/*.test.(ts|tsx)", "*.test.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  verbose: true,
};
