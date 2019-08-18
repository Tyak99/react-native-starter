import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Login page </Text> 
        <Button
          title="Back to the splash screen"
          onPress={() => this.props.navigation.navigate('SplashScreen')}
        /><Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
