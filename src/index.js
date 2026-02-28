const flags = require('./flags');

console.log("--- Running... ---");

if (flags.NEW_DASHBOARD) {
  console.log("New Dashboard Enabled");
} else {
  console.log("Old Dashboard Enabled");
}