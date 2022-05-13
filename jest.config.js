module.exports = {
  // These transform patterns do absolutely nothing in making things work
  // prettier-ignore
  transformIgnorePatterns: ["/node_modules/(?!(solid-js/web|solid-app-router)/)"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  // uses a webpack style resolver, the default one has many issues.
  // resolver: require.resolve("./jest/resolver"),
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx$": require.resolve("./jest/transform"),
    "\\.[jt]s$": "babel-jest",
  },
};
