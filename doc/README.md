# Angular with Jest Example



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
  
- Prepare `setupJest.ts`
  ```ts
   import 'jest-preset-angular/setup-jest';
  ```

- Component test basic configuration
  - `TestBed.configureTestingModule`
  - `createComponent()`
  - ComponentFixture
    - The ComponentFixture is a test harness for interacting with the created component and its corresponding element.
  - beforeEach()
    - You will add more tests as this component evolves. Rather than duplicate the TestBed configuration for each test, 
    you refactor to pull the setup into a Jest beforeEach() and some supporting variables
  - nativeElement
    - Angular can't know at compile time what kind of HTML element the nativeElement is or if it even is an HTML element. 
    The application might be running on a non-browser platform, such as the server or a Web Worker,
    where the element might have a diminished API or not exist at all


- 
---
