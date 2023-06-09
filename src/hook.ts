import { HookFunctionInputs } from "side-code-export";

const emitters = {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  declareDependencies,
  declareMethods: empty,
  declareVariables,
  inEachBegin: empty,
  inEachEnd: empty,
};

export default emitters;

function afterAll() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [],
    },
    endingSyntax: {
      commands: [],
    },
    registrationLevel: 1,
  };
  return params;
}

function afterEach() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [],
    },
    endingSyntax: {
      commands: [],
    },
  };
  return params;
}

function beforeAll() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [],
    },
    endingSyntax: {
      commands: [],
    },
    registrationLevel: 1,
  };
  return params;
}

function beforeEach() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [],
    },
    endingSyntax: {
      commands: [],
    },
  };
  return params;
}

function declareDependencies() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [
        {
          level: 0,
          statement: `const assert = require('assert');`,
        },
      ],
    },
  };
  return params;
}

function declareVariables() {
  const params: HookFunctionInputs = {
    startingSyntax: {
      commands: [
        {
          level: 0,
          statement: `const By = $selenium.By;`,
        },
        {
          level: 0,
          statement: `const until = $selenium.until;`,
        },
        {
          level: 0,
          statement: `const vars = new Map();`,
        },
        {
          level: 0,
          statement: `const TIMEOUT = 3000;`,
        },
      ],
    },
  };
  return params;
}

function empty() {
  return {};
}
