/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['.'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/styleMock.ts',
    },
    testEnvironment: 'jest-environment-jsdom',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    transformIgnorePatterns: [
        'node_modules/(?!react-leaflet/lib|@react-leaflet/core/lib|leaflet)',
    ],
}
