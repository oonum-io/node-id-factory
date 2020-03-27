module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import', 'json'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
  env: {
    'node': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:json/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ]
};
