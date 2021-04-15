/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App'

AppRegistry.registerComponent(appName, () => App);

// import './rn-console.config' // avoid not needed console messages
// import { AppRegistry } from 'react-native'
// import { name as appName } from './app.json'
// import 'react-native-gesture-handler'
// import './rn-debugger.config' // configure react-native-debugger
// import './rn-fallback.config'
// import 'intl' // Android intl polyfill
// import 'intl/locale-data/jsonp/en' // Android intl polyfill
// import { i18n, sentry } from '@services' // need for React i18n initialization
// import App from './src/App'

// AppRegistry.registerComponent(appName, () => App)