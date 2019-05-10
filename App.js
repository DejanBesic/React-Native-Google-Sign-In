/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';

type Props = {};
export default class App extends Component<Props> {
  state = {
    user: ''
  }

  handleSignIn = async () => {
    await GoogleSignIn.configure({
      webClientId: '15706365710-nu6p5kvg5oee7rv0g7v7vcl8utligein.apps.googleusercontent.com'
    });
    const user = await GoogleSignIn.signInPromise().then(res => console.log(res)).catch(err => console.log(err));
    this.setState({ user: user});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleSignIn}>
          <Text>{"Google sign in"}</Text>
        </TouchableOpacity>
        <Text>{this.state.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
