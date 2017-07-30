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

export default class RegistrationForm extends Component {
  render() {

    return (
      <View style={styles.container}>
        
        <StatusBar 
          barStyle="light-content"
        />
        <View style={styles.form}>

          <TextInput 
            placeholder="username"
            placeholderTextColor="black"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />

          <TextInput 
            placeholder="email"
            placeholderTextColor="black"
            ref={(input) => this.emailInput = input}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.input}
          />

          <TextInput 
            placeholder="password"
            placeholderTextColor="black"
            returnKeyType="join"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />

        </View>

        <View style={styles.registration}>
          <TouchableOpacity style={styles.registerButtonContainer}>
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
    marginTop: 300,
    marginBottom: 15
  },
  input: {
    height: 40,
    backgroundColor: '#B2EBF2',
    color: 'black',
    marginBottom: 15,
    color: '#FFFFFF',
    paddingHorizontal: 100
  },
  registerButtonContainer: {
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
  registerButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});