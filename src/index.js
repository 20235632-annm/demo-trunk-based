const flags = require('./flags');

console.log("--- Running... ---");

if (flags.NEW_FEATURE) {
  console.log("New feature enabled");
} else {
  console.log("New feature disabled");
}