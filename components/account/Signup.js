import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from '../services/Firebase';
import _ from 'lodash'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: undefined,
    }
    this._register = this._register.bind(this)
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }


  async _register() {
    let clearErrors = await this.setState({errors: undefined})

    let authUser = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => this.setState({errors: error.message}));

    if (this.state.errors !== undefined) {
      console.log("Error creating user.")
    } else if (this.state.errors === undefined) {
      console.log("Proceed to save user info in database.")
      this.createUserProfile();
    }
  }

  createUserProfile() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let userInput = {
          uid: user.uid,
          name: this.state.name,
          email: this.state.email,
        }
        let newUserData = {}
        newUserData['/users/' + user.uid] = userInput

        firebase.database().ref().update(newUserData)
        this.props.navigation.navigate('Camera')
      }
    }.bind(this));
  }

  renderErrorMessage() {
    return(
      <Text style={styles.errorText}>*{this.state.errors}</Text>
    )
  }

  render() {
    return (
      <View style={styles.background}>
        <StatusBar barStyle="default"/>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <View>
              {this.state.errors !== undefined ? this.renderErrorMessage() : null }
            </View>
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="What should we call you?"
              placeholderTextColor="#434343"
              ref={(input) => this.nameInput = input}
              returnKeyType="next"
              onSubmitEditing={() => this.nameInput.focus()}
              onChangeText = {(text) => this.setState({name: text})}
              style={styles.userInput}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="Email"
              placeholderTextColor="#434343"
              ref={(input) => this.emailInput = input}
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
              onChangeText = {(text) => this.setState({email: text})}
              keyboardType="email-address"
              style={styles.userInput}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="Password"
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
              placeholder="Confirm Password"
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
    fontWeight: '500'
  },
  errorText: {
    color: 'red'
  },
});
