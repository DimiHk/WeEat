module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                    '.css',
                    '.android.css',
                    '.native.css',
                ],
                alias: {
                    '@': './src/',
                    '@components': './src/components',
                    '@screens': './src/screens',
                },
            },
        ],
    ],
}
