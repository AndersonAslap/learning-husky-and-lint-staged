module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
    },
};