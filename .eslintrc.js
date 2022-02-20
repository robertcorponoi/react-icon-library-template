module.exports = {
    // Provides pre-defined global variables.
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    "env": {
        "jest": true,
        "node": true,
        "es2021": true,
    },
    // Extends other `eslint` configurations.
    // https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    // Specifies the parser to use.
    // https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
    "parser": "@typescript-eslint/parser",
    // Specifies the JavaScript language options to support.
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // Third-party plugins.
    // https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins
    "plugins": [
        "@typescript-eslint"
    ],
    // Specifies which rules should be turned on/off.
    // https://eslint.org/docs/user-guide/configuring/rules
    "rules": {},
};
