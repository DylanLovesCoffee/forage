import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import RegistrationForm from './RegistrationForm'
import {firebaseRef} from '../services/Firebase'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { StackNavigator } from 'react-navigation';

export default class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._login = this._login.bind(this)
  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
      console.log('hello')
    }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image>
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

        <View style={styles.login}>
          <TouchableOpacity style={styles.loginButtonContainer} onPress={this._login}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View> 
      </Image>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 390,
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  loginButtonContainer: {
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderWidth: 2,
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
  },
  
});


