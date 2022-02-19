module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks', 
    'prettier'
  ],
  rules: {
    "react/no-array-index-key": "off",
		"no-plusplus": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-debugger": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/aria-role": [
      2,
      {
        "ignoreNonDOM": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
    "allowTypedFunctionExpressions": "off",
    "allowExpressions ": "off",
    "no-console": "warn",
    "consistent-return": "warn",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "react/jsx-curly-newline": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": [
          "arrowFunctions"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-indent": [
      2,
      "tab"
    ],
    "react/jsx-indent-props": [
      2,
      "tab"
    ]
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
