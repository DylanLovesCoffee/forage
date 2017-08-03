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
import {firebaseRef} from '../services/Firebase'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

export default class RegistrationForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._register = this._register.bind(this)
  }

  _register() {

    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode)
      console.log(errorMessage)
    });

  }

  render() {
    return (
      <View style={styles.bkgColor}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <View style={styles.form}>
              <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="email"
                placeholderTextColor="black"
                ref={(input) => this.emailInput = input}
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText = {(text) => this.setState({email: text})}
                keyboardType="email-address"
                style={styles.input}
              />
              <TextInput
                autoCorrect={false}
                autoCapitalize='none' 
                placeholder="password"
                placeholderTextColor="black"
                returnKeyType="join"
                secureTextEntry
                style={styles.input}
                onChangeText = {(text) => this.setState({password: text})}
                ref={(input) => this.passwordInput = input}
              />
            </View>

            <View style={styles.registration}>
              <TouchableOpacity style={styles.registerButtonContainer} onPress={this._register}>
                <Text style={styles.registerButtonText}>create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  bkgColor: {
    flex: 1,
    backgroundColor: '#4DB6AC',
    padding: 15
  },
  container: {
    padding: 20,
    marginTop: 180,
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  registerButtonContainer: {
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  registration: {

  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
