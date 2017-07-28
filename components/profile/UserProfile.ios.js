import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "User's First Name - DYNAMIC",
      recipeList: undefined
    };
  }

  render() {
    return (
      <View>
        <Text>Hello, {this.state.userFirstName}</Text>
        <Text>List Recipes Here: {this.state.recipeList}</Text>
      </View>
    );
  }
}
