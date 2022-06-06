module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
	globalSetup: 'jest-preset-angular/global-setup',
	collectCoverage: true,
	testPathIgnorePatterns: [
		'<rootDir>/src/index.html',
		'<rootDir>/src/main.ts',
		'<rootDir>/src/polyfills.ts',
		'<rootDir>/src/environments/*',
	],
  };
