import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppStackNavigator from "../../navigators/AppNavigator";

export default class RootScreen extends Component {
  render() {
    return (
        <AppStackNavigator />
    );
  }
}
