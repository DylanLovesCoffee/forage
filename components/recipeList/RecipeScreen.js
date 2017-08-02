import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeScreen extends Component {

  render() {
    console.log(this.props.navigation.state.params.instructions);
    let instructionsString = this.props.navigation.state.params.instructions.replace(/\s+/g,' ').trim();
    let instructionsArray = instructionsString.split('. ')
    return(
      <View>
        {instructionsArray.map(function(line) {
          return<Text>{line + ". \n"}</Text>
        })}
      </View>
    )
  }
}
