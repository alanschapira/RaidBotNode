module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    "no-console": 0,
    "arrow-parens": 0,
    "consistent-return": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "max-len": [2, { "code": 120 }],
    "object-curly-newline": 0,
    "no-use-before-define": 0
  },
};
