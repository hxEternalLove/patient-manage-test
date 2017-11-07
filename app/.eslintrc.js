module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["standard", 'plugin:react/recommended', "plugin:flowtype/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "globalReturn": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "standard",
        "react",
        "flowtype"
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "no-return-await": 0,
        "space-before-function-paren": [0, "always"],
        "spaced-comment": [0, "always"],
        "flowtype/no-types-missing-file-annotation": [0, "always"],
        "no-useless-constructor": [0, "always"],
        "react/no-deprecated": [0, "always"],
        "react/prop-types": [0, "always"],
        "react/no-string-refs": [0, "always"],
        "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    }
};