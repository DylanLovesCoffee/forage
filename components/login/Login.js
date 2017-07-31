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

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>

        <View>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10

  }
  
});