import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeDetails extends Component {

  render() {
    console.log("This is in the details")
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
