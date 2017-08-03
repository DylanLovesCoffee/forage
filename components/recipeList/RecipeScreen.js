import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeScreen extends Component {

  render() {
    if (this.props.navigation.state.params.instructions != undefined) {
      let instructionsString = this.props.navigation.state.params.instructions.replace(/\s+/g,' ').trim();
      let instructionsArray = instructionsString.split('. ')
    } else {
        let instructionsArray = ["recipe","instructions"]
    }
    return(
      <ScrollView>
        {instructionsArray.map(function(line) {
          return<Text>{line + ". \n"}</Text>
        })}
    </ScrollView>
    )
  }
}
