import React, { Component } from 'react';
import RootScreen from './src/containers/RootScreen/RootScreen';
import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import {store, persistor} from './src/store/index';
import { PersistGate } from 'redux-persist/lib/integration/react'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    );
  }
}
