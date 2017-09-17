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
      // let instructionsString = this.props.navigation.state.params.instructions.replace(/\s+/g,' ').trim();
      // console.error = (error) => error.apply;
      // let instructionsArray = instructionsString.split('. ')
    return(
      <ScrollView>
        {/* {instructionsArray.map(function(line) {
          return(<Text>{line + '. \n'}</Text>)
        })} */}
        <Text>{recipe.instructions}</Text>
      </ScrollView>
    )
  }
}
