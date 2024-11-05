module.exports = {
    root: true,
    env: {es6: true, node: true, browser: true, jest: true},
    extends: [
        'plugin:sonarjs/recommended-legacy',
        '@react-native',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {modules: true},
        sourceType: 'module',
    },
    plugins: ['sonarjs', '@typescript-eslint'],
    rules: {
        'react/self-closing-comp': 'error',
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                semi: false,
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
    ignorePatterns: ['node_modules'],
}
