module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-extended/all',
  ],
  ignorePatterns: ['dist', '*.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jest', 'jest-extended'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
