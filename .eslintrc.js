module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "google"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 2, { "MemberExpression": "off" }],
    "no-console": 0,
    "arrow-parens": 0,
    "max-len": [2, { "code": 120, "tabWidth": 2, "ignoreUrls": true }],
  },
};
