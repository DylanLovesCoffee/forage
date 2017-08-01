import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component {

  render() {
    let { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView behavior="padding" >

        <View>
          <LoginForm navigate={navigate}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
