import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeButton extends Component {
  render() {

    let { title, navigate, id } = this.props
    return(
      <View>
        <Button
          onPress={() => navigate('Recipe', { title: title, id: id })}
          title={title} id={id}
        />
      </View>
    )
  }
}


// async getRecipeDetails() {
//   let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.props.recipeId + "/information?includenutrition=false"
//
//   let recipeDetailsJson = await fetch(url, {
//     headers: {
//       "X-Mashape-Key": RFN_KEY,
//       "Accept": "application/json"
//     }
//   })
//   .then(response => response.json())
//   this.setState({recipeDetails: recipeDetailsJson})
// }
