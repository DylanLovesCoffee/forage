import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeScreen extends Component {
  static navigationOptions = {
    title: 'recipe test screen'
  }
  render() {
    return(
      <Text>this is the test screen for an individual recipe</Text>
    )
  }
}
