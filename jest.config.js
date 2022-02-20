/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
    // A preset that is used as a base for Jest's configuration. Since we use 
    // `ts-jest`, we set that as our preset.
    // https://jestjs.io/docs/configuration#preset-string
    preset: "ts-jest",
    // The test environment that will be used for testing.
    // https://jestjs.io/docs/configuration#testenvironment-string
    testEnvironment: "jsdom",
};