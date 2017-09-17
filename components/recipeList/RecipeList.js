import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { RFN_KEY } from 'react-native-dotenv';
import RecipeButton from './RecipeButton';

export default class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      data : [
        {title: 'Loading... 🍔'},
      ]
    }
  }

  async componentDidMount() {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + this.props.navigation.state.params.name + "&limitLicense=false&number=5&ranking=1"

    let responseJson = await fetch(url, {
      headers: {
        "X-Mashape-Key": RFN_KEY,
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    this.setState({data: responseJson})
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        {this.state.data.map(function(recipe, i) {
          return <RecipeButton navigate={navigate} id={recipe.id} title={recipe.title} key={i} />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c0392b'
  },
});
