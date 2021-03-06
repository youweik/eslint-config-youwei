const rules = require('./rule')

module.exports = {
  root: true,
  extends: ['standard'],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  rules: rules
}
