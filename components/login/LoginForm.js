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

export default class LoginForm extends Component {
  render() {

    return (
      <View style={styles.container}>
        
        <StatusBar 
          barStyle="light-content"
        />

        <TextInput 
          placeholder="username"
          placeholderTextColor="black"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.input}
        />

        <TextInput 
          placeholder="password"
          placeholderTextColor="black"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#B2EBF2',
    color: 'black',
    marginBottom: 5,
    color: '#FFFFFF',
    paddingHorizontal: 100
  },
  buttonContainer: {
    backgroundColor: '#34495e',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
  
});