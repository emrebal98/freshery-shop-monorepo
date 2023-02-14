module.exports = {
  env: {    
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['turbo', '@typescript-eslint', 'prettier'],
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
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
    "@typescript-eslint/no-var-requires": "off"
  },
};
