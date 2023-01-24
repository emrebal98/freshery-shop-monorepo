module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  // ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  // env: {
  //   node: true,
  //   es6: true,
  // },
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  // },
};
