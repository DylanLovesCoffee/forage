import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import OpenCamera from './camera/OpenCamera';
import AppCamera from './camera/AppCamera';
import { StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

export default class NavBar extends Component {

  render() {
    return(
      <View style={styles.container}>
        <NavTab />
      </View>
    );
  }
}

const NavConfig = {
  Cam: { screen : OpenCamera },
  AppCam: { screen : AppCamera },
};

const NavTab = StackNavigator(NavConfig)

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
  }
})
