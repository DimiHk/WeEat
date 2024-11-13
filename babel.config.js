module.exports = {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
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
                    '@components': './src/components',
                    '@screens': './src/screens',
                },
            },
            'react-native-reanimated/plugin',
        ],
    ],
}
