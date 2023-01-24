module.exports = {
  root: true,
  extends: ['custom-server'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist'],
};
