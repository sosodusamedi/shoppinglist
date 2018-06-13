module.exports = {
  "parser": 'babel-eslint',

  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },

  "extends": ["eslint:recommended", "plugin:react/recommended"],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },

  "plugins": [ "react" ],

  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  }
}
