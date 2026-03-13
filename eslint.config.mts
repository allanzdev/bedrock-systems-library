import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            semi: "error",
            quotes: ["error", "double"],
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "no-undef": "error",
            "no-duplicate-case": "error",
            "no-unreachable": "error",
            "no-func-assign": "error",
            "no-const-assign": "error",
            "no-var": "error",
            "prefer-const": "error",
            indent: ["error", 4, { SwitchCase: 1 }],
            "max-lines": ["warn", 300],
            "curly": "error",
            "no-nested-ternary": "error",
            "no-lonely-if": "error",
            "no-useless-return": "error",
            "consistent-return": "error",
            "default-case": "error",
            "no-else-return": "error",
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "max-lines-per-function": ["warn", 80],
            "max-params": ["warn", 4],
            "complexity": ["warn", 10],
            "prefer-template": "error",
            "prefer-arrow-callback": "error",
            "arrow-body-style": ["error", "as-needed"],
            "object-shorthand": "error",
        },
    },
]);
