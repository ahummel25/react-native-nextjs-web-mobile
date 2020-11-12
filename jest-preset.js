const reactNativePreset = require('react-native/jest-preset');

module.exports = Object.assign({}, reactNativePreset, {
  setupFiles: [require.resolve('./__mocks__/save-promise.js')]
    .concat(reactNativePreset.setupFiles)
    .concat([require.resolve('./__mocks__/restore-promise.js')])
});
