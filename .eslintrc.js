var config = {
  env: {
    browser: true,
    es2021: true,
    node:true,
  },
  settings: {
    "react": {
      "version": "16.8.2"
    }},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-console": "error",
    "indent": ["error", 2],
    "semi": "warn",
    "no-unused-vars": "error",
    "require-await" : "error",
    "no-useless-catch": "off"
  }
};
module.exports = config;