import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RFN_KEY } from 'react-native-dotenv';

export default class RecipeButton extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     recipeDetails: null
  //   }
  // }

  async getRecipeDetails() {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.props.id + "/information?includenutrition=false"

    let recipeDetailsJson = await fetch(url, {
      headers: {
        "X-Mashape-Key": RFN_KEY,
        "Accept": "application/json"
      }
    })
    .then(response => response.json())

    // let storeDetails = await this.setState({recipeDetails: recipeDetailsJson})

    this.props.navigate('Recipe', { title: this.props.title, recipeDetails: recipeDetailsJson })
  }

  render() {
    let { title, id, navigate } = this.props
    return(
      <View>
        <Button
          onPress={this.getRecipeDetails.bind(this)}
          title={title}
        />
      </View>
    )
  }
}
