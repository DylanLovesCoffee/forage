import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {firebaseRef} from '../services/Firebase'
import Actions from 'react-native-router-flux'
import _ from 'lodash'

export default class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._login = this._login.bind(this)
    this._register = this._register.bind(this)
  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      console.log(error.code)
      console.log(error.message)

    })
  }

  _register() {
    Actions.RegistrationForm()
  }

  render() {

    return (
      <View style={styles.container}>
        
        <StatusBar 
          barStyle="light-content"
        />
        <View style={styles.form}>
          <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            placeholder="email"
            placeholderTextColor="black"
            returnKeyType="next"
            onChangeText = {(text) => this.setState({email: text})}
            value={this.state.email}
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.input}
          />

          <TextInput 
            autoCorrect={false}
            autoCapitalize='none'
            placeholder="password"
            placeholderTextColor="black"
            onChangeText = {(text) => this.setState({password: text})}
            value={this.state.password}
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />
        </View>

        <View style={styles.login}>
          <TouchableOpacity style={styles.loginButtonContainer} onPress={this._login}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registration}>
          <TouchableOpacity style={styles.registerButtonContainer} onPress={this._register}>
            <Text style={styles.registerButtonText}>create account</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  form: {
    marginTop: 255,
  },
  input: {
    height: 40,
    backgroundColor: '#B2EBF2',
    color: 'black',
    marginBottom: 15,
    color: '#FFFFFF',
    paddingHorizontal: 100
  },
  loginButtonContainer: {
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  registration: {
    alignItems: 'center'
  }, 
  registerButtonContainer: {
    marginTop: 15
  }
});