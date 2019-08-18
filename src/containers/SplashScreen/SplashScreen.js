import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color={Platform.OS === 'ios' ? '#fff' : null}
      />
    ),
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Your app is coming alive</Text> 
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}
