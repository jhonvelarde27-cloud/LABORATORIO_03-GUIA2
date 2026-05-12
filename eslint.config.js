module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        __dirname: "readonly"
      }
    },
    rules: {
      "eqeqeq": "error",
      "no-var": "warn",
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "warn"
    }
  }
];