const test = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("./app");

test("app returns the expected welcome message", () => {
  assert.equal(getMessage(), "Hello from my DevOps CI/CD pipeline!");
});
