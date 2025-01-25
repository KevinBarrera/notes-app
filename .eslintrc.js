// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
