import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RFN_KEY } from 'react-native-dotenv';

export default class RecipeButton extends Component {
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
      <View style={styles.container}>
        <TouchableHighlight>
          <Text
            onPress={this.getRecipeDetails.bind(this)}
            style={styles.recipeButton}
            >{title}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  recipeButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: '#434343',
    overflow: 'hidden'
  }
});
