import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import firebase from '../services/Firebase';
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
    this._register = this._register.bind(this)
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  _register() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    });
  }

  render() {
    return (
      <View style={styles.background}>
        <StatusBar barStyle="default"/>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="email"
              placeholderTextColor="#434343"
              ref={(input) => this.emailInput = input}
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText = {(text) => this.setState({email: text})}
              keyboardType="email-address"
              style={styles.userInput}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="password"
              placeholderTextColor="#434343"
              returnKeyType="join"
              secureTextEntry
              style={styles.userInput}
              onChangeText = {(text) => this.setState({password: text})}
              ref={(input) => this.passwordInput = input}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="confirm password"
              placeholderTextColor="#434343"
              returnKeyType="join"
              secureTextEntry
              style={styles.userInput}
              onChangeText = {(text) => this.setState({confirmPassword: text})}
              ref={(input) => this.passwordInput = input}
            />
            <View>
              <TouchableOpacity
                style={styles.signupButton}
                disabled={!this.validateForm()}
                onPress={this._register}
              >
                <Text style={styles.signupButtonText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  formContainer: {
    padding: 20,
    marginTop: 180,
  },
  userInput: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#434343',
    color: 'white',
  },
  signupButton: {
    backgroundColor: '#434343',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: .5,
    borderRadius: 10,
    overflow: 'hidden'
  },
  signupButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
