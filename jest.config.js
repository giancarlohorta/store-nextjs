module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Suporte para os paths do Next
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // mock de CSS
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
