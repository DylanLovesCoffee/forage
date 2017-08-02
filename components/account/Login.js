import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img}>  
          <Image source={require('../img/OmakaseWhite.png')}style={styles.logo}/>
        </View>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DB6AC',
    padding: 20
  },
  logo: {
    height: 50, 
    width: 250,
    marginTop: 230,
    marginLeft: 30
  },
  img: {
    flex: 1,
    backgroundColor: '#4DB6AC',
    padding: 20,
  },
  form: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  }
});




