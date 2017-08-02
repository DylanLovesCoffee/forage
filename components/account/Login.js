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
<<<<<<< HEAD

  render() {
    let { navigate } = this.props.navigation
=======
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const { navigate } = this.props.navigation;
>>>>>>> Style login and register page and position login button
    return (
      <KeyboardAvoidingView behavior="padding" >

        <View>
          <LoginForm navigate={navigate}/>
        </View>
<<<<<<< HEAD
      </KeyboardAvoidingView>
    );
  }
}
=======
        <View style={styles.account}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigate('LoginForm')}>
           <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Register')}>
           <Text style={styles.registerText}>Create account</Text>
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

  },
  account: {
    marginBottom: 90
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




>>>>>>> Style login and register page and position login button
