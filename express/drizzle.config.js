const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  out: "./drizzle",
  schema: "./models/index.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:tarush@localhost:5433/book-store",
  },
});