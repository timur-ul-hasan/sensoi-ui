module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "import/prefer-default-export": "off",
    "linebreak-style": 0,
    "func-names": ["error", "always", { generators: "never" }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/button-has-type": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-props-no-spreading": 1,
    "no-console": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "object-curly-newline": [
      "warn",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
        ImportDeclaration: "never",
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    "arrow-body-style": ["warn"],
    "react/jsx-one-expression-per-line": ["warn"],
    "@typescript-eslint/camelcase": ["warn"],
    "no-useless-catch": ["warn"],
    "no-console": ["warn"],
    "react/jsx-one-expression-per-line": [0],
    "no-empty": [1],
    "comma-dangle": [0],
    "max-len": [1],
    "no-confusing-arrow": [1],
    "implicit-arrow-linebreak": [1],
    "operator-linebreak": [0],
    "no-underscore-dangle": [0],
    "no-return-await": [0],
    "arrow-parens": [0],
    "implicit-arrow-linebreak": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [1],
    "no-nested-ternary": [1],
    "generator-star-spacing": [0],
    "react/jsx-wrap-multilines": [0],
    "no-shadow": [1],
    "@typescript-eslint/indent": [1],
    "no-restricted-globals": [1],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
