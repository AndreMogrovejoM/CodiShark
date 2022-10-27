module.exports = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 36,
      branches: 12,
      lines: 36,
      functions: 20
    }
  },
  verbose: false,
  rootDir: "../..",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["jest-extended/all"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transformIgnorePatterns: ["node_modules/(?!@foobar)/"],
  transform: {
    "^.+\\.(ts|tsx)?$": "esbuild-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest"
  }
};
