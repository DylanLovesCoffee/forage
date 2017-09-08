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
import RegistrationForm from './RegistrationForm';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { StackNavigator } from 'react-navigation';
import App from '../../App';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this._login = this._login.bind(this);
  }

  static navigationOptions = {
    title: "Login"
  };

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
      <View style={styles.color}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
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
              <TouchableOpacity style={styles.loginButtonContainer} onPress={this._login.bind(this)}>
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
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 180
  },
  color: {
    flex: 1,
    backgroundColor: '#c0392b'
  },
  form: {
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  loginButtonContainer: {
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'white',
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
