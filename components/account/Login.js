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
import Signup from './Signup';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { StackNavigator } from 'react-navigation';
import App from '../../App';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this._login = this._login.bind(this);
  }

  _login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(user){
      this.props.navigation.navigate('Profile')
    }.bind(this)).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="email"
              placeholderTextColor="#434343"
              returnKeyType="next"
              onChangeText = {(text) => this.setState({email: text})}
              value={this.state.email}
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCorrect={false}
              style={styles.userInput}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="password"
              placeholderTextColor="#434343"
              onChangeText = {(text) => this.setState({password: text})}
              value={this.state.password}
              returnKeyType="go"
              secureTextEntry
              style={styles.userInput}
              ref={(input) => this.passwordInput = input}
            />
            <View style={styles.login}>
              <TouchableOpacity style={styles.loginButton} onPress={this._login}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
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
    backgroundColor: '#000000'
  },
  formContainer: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 180
  },
  userInput: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#434343',
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#434343',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: .5,
    borderRadius: 10,
    overflow: 'hidden'
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
});
