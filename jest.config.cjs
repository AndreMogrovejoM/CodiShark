const config = require("./jest.base.config");

//TODO: enable runner to exec jest from the root. Wait for a future release.
// jest-expo is currently problematic
module.exports = {
  ...config,
  rootDir: ".",
  projects: ["<rootDir>/packages/*/jest.config.js"]
};
