import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppCamera from '../camera/AppCamera';
import UserProfile from '../profile/UserProfile';
import { StackNavigator } from 'react-navigation';

export default class Profile extends Component {

  render() {
    return(
      <View style={styles.container}>
        <NavTab />
      </View>
    );
  }
}

const NavConfig = {
  Profile: { screen: UserProfile },
  Cam: { screen: AppCamera },
};

const NavTab = StackNavigator(NavConfig)

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
  }
})
