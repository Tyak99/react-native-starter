import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import { connect } from "react-redux";
import { getJoke } from "../../store/actions/userAction";



class SplashScreen extends Component {
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
        <Text>{this.props.user.joke}</Text>
        <Button
          title="Change the joke"
          onPress={() => this.props.getJoke()}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJoke: () => dispatch(getJoke()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)