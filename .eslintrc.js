module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 0是忽略，1是警告，2是报错
    quotes: 2,
    semi: 0,
    "no-console": 0,
  },
}
