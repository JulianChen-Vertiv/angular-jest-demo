module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
	testMatch: ['**/+(*.)+(spec).+(ts)'],
	globalSetup: 'jest-preset-angular/global-setup',
	collectCoverage: true,
	testPathIgnorePatterns: [
		'<rootDir>/src/index.html',
		'<rootDir>/src/main.ts',
		'<rootDir>/src/test.ts',
		'<rootDir>/src/polyfills.ts',
		'<rootDir>/src/environments/*',
	],
	coverageThreshold: {
		global: {
			lines: 100,
			branches: 100,
			functions: 100,
		}
	}
  };
