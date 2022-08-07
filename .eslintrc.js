module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["prettier", "next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": 1,
    "no-undef": "off",
  },
};
