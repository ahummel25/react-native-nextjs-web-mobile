module.exports = {
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  preset: './jest-preset.js',
  testMatch: null,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native-vector-icons|unimodules-permissions-interface|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileTransformer.js'
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  verbose: true
};
