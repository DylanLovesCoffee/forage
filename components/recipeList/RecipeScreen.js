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
    let recipe = this.props.navigation.state.params.recipeDetails
    let instructionsArray = recipe.instructions.replace(/\s+/g,' ').trim().split('. ')
    return(
      <ScrollView>
        {instructionsArray.map(function(line, i) {
          return(<Text key={i}>{i + 1}. {line + '\n'}</Text>)
        })}
      </ScrollView>
    )
  }
}
