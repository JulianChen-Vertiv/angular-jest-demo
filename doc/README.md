# Angular with Jest Example

## Jest Configuration

- The jest-preset-angular library will configure Jest and it will also configure the Angular TestBed for you.
- Add jest.config

```ts
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

```

---
