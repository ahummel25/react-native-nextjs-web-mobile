// @generated: @expo/next-adapter@2.1.41
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ],
    ['@babel/plugin-proposal-class-properties'], // Comment out when running "yarn run <ios or android>", but needed for doing serverless web app deploy
    ['@babel/plugin-transform-flow-strip-types'] // Needed for react navigation issue - https://github.com/react-navigation/react-navigation/issues/6058
  ]
};
