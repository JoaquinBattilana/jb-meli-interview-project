module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings: {
    "import/resolver": {
      "babel-module": {
        "extensions": [".js", ".tsx", ".ts", ".jsx"]
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
};
