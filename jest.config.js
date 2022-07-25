module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  restoreMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};
