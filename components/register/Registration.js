import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import RegistrationForm from './RegistrationForm'

export default class Registration extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <RegistrationForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10

  }
  
});