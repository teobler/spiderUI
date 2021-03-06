module.exports = {
  parser: '@typescript-eslint/parser',        // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended',               // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended',            // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/@typescript-eslint',            // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: [
    'react-hooks',
  ],
  parserOptions: {
    ecmaVersion: 2018,     // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,           // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': [
      'enabled',
      {'ignore': 'ignore', 'customValidators': 'customValidator'}
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
