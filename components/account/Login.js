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

export default class Login extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.img}>
          <Image source={require('../img/OmakaseWhite.png')} style={styles.logo}/>
        </View>

        <View style={styles.account}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigate('LoginForm')}>
           <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerButton}>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Register')}>
           <Text style={styles.registerText}>🌭 Create Account</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DB6AC',
    padding: 20,
  },
  logo: {
    height: 50,
    width: 250,
    marginTop: 100,
    marginLeft: 30
  },
  img: {
    flex: 1,
    backgroundColor: '#4DB6AC',
    padding: 20,
    alignItems: 'stretch'
  },
  form: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  },
  loginButton: {
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  registerButton: {
    marginBottom: 0,
  },
  account: {
    marginBottom: 100
  },
  loginText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  registerText: {
    textAlign: 'center',
    fontWeight: '300'
  }
});
