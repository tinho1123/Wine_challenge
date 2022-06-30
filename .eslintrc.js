module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },

    extends: ["plugin:react/recommended", "airbnb"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "react/jsx-filename-extension": [0],
    },
  },
};
