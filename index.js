module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 8
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": [
      "warn",
      "consistent"
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "warn",
    "array-element-newline": [
      "warn",
      "consistent"
    ],
    "arrow-body-style": "warn",
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "off",
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      { "allowSingleLine": false }
    ],
    "callback-return": "off",
    "camelcase": "warn",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": "error",
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "off",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": [
      "error",
      "all"
    ],
    "default-case": "off",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": "warn",
    "for-direction": "warn",
    "func-call-spacing": "error",
    "func-name-matching": "warn",
    "func-names": "off",
    "func-style": [
      "warn",
      "declaration",
      { "allowArrowFunctions": true }
    ],
    "function-paren-newline": "off",
    "generator-star-spacing": ["warn", "neither"],
    "global-require": "warn",
    "guard-for-in": "off",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "implicit-arrow-linebreak": "off",
    "indent": [
      "off", 2, {
        "SwitchCase": 1
      }
    ],
    "indent-legacy": "off",
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": [
      "warn",
      {
        "allowBlockStart": true
      }
    ],
    "lines-around-directive": "off",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": "off",
    "max-len": [
      "error",
      {
        "code": 100,
        "tabWidth": 2
      }
    ],
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "warn",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "warn",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "off",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-case-declarations": "warn",
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-continue": "warn",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "warn",
    "no-eq-null": "warn",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "warn",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": [
      "error",
      "functions"
    ],
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "warn",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-assign": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "no-native-reassign": "error",
    "no-negated-condition": "warn",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "off",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": [
      "error",
      {
        "props": false
      }
    ],
    "no-self-compare": "warn",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": [
      "error",
      {
        "allowAtRootLevel": true
      }
    ],
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "warn",
    "no-underscore-dangle": [
      "warn",
      {
        "allow": ["_id"]
      }
    ],
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": false
      }
    ],
    "no-unused-expressions": [
      "warn",
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-unused-vars": "off",
    "no-use-before-define": "warn",
    "no-useless-call": "warn",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "warn",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": [
      "warn",
      "always",
      { "objectsInObjects": false }
    ],
    "object-shorthand": "warn",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": "error",
    "operator-linebreak": "warn",
    "padded-blocks": [
      "warn",
      "never"
    ],
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": [
      "warn",
      {
        "array": false
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "off",
    "prefer-promise-reject-errors": "warn",
    "prefer-rest-params": "off",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": [
      "error",
      "as-needed"
    ],

    "quotes": "error",
    "radix": "error",
    "require-atomic-updates": "warn",
    "require-await": "error",
    "require-jsdoc": "off",
    "require-unicode-regexp": "off",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi": ["error", "never"],
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "sort-imports": "error",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "warn",
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": true,
        "overrides": {
          "-": false,
          "+": false
        }
      }
    ],
    "spaced-comment": [
      "warn",
      "never"
    ],
    "strict": "off",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": "error",
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "error",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": false
      }
    ],
    "vars-on-top": "off",
    "wrap-iife": [
      "warn",
      "inside",
      { "functionPrototypeMethods": true }
    ],
    "wrap-regex": "off",
    "yield-star-spacing": "error",
    "yoda": "warn"
  }
}
