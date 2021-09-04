module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['node_modules', '.style.ts'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['cypress'],
};
