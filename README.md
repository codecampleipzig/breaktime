# Breaktime

## Setup

- git init
- create a readme
- `yarn init -y`
- `mkdir src`
- `touch src/index.js`
- Write a hello world program and test it manually with `node src/index.js`
- Create script **start** in package.json
- Create a .gitignore file to exclude the node_modules

## Unit Testing Setup

- `yarn add jest`
- Create a test file which matches src/myModule.spec.js
- Write a basic test setup

```js
describe("Test Suite name goes here", () => {
  it("Test Case description goes here", () => [
    // Test some assertions
    expect(1 + 1).toBe(2),
  ]);
});
```

- Run the tests using `yarn run jest`
- Setup a test script `"test": "jest"`

## Global Installation

- Add `#! /usr/bin/env node` to the start of your index.js file
- Add the key `bin` to your package.json

```json
{
  "bin": {
    "breaktime": "src/index.js"
  }
}
```

- Install the command globally from the repository

```bash
npm install -g .
```
