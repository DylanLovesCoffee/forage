import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import List from '../recipeList/List'
import { RFN_KEY } from 'react-native-dotenv';

export default class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      data : [
        {title: 'Loading... 🍔'},
      ]
    }
  }

  static navigationOptions = {
    title: 'Recipes',
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
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <List recipes={this.state.data} navigate={navigate}/>
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
