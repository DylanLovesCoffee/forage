import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default () => {
  render() {

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            initial
          />
          <Scene
            key="register"
            component={RegistrationForm}
            title="create"
          />
        </Scene>
      </Router>
    );
  }
}
