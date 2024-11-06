module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
    coverageDirectory: './coverage',
    coverageReporters: ['lcov', 'text'],
}
