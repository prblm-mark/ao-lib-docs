/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            1,
            {
                semi: false,
                tabWidth: 4,
                singleQuote: true,
                bracketSpacing: true,
                bracketSameLine: false,
            },
        ],
    },
}
