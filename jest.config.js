module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  restoreMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  coverageReporters: ["lcov"],
  coverageThreshold: {
        global: {
            lines: 80,
        },
    },
};
