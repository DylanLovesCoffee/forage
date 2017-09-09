import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Button
} from 'react-native';

export default class LandingPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../img/forage-logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigate('Login')}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigate('Register')}>
            <Text style={styles.signupText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  logo: {
    marginTop: 100,
    marginLeft: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  signupContainer: {
    marginBottom: 70,
  },
  loginContainer: {
    marginBottom: 80
  },
  loginText: {
    textAlign: 'center',
    color: '#434343',
    fontWeight: '700'
  },
  signupText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#434343',
  },
  loginButton: {
    borderWidth: .5,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#434343',
  },
  signupButton: {
    borderWidth: .5,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#434343',
  }
});
