/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main from './src/components/main/Main';

import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class RNApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Main />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RNApp', () => RNApp);
