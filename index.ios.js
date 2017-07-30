/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe'
import List from './components/recipeList/List'

export default class RecipeList extends Component {

  constructor() {
    super();
    this.state = {
      data : [
        {title: 'Boom pizza'},
        {title: 'Malai Kofta'},
        {title: 'Lame Salad'}
      ]
    }
  }

  static navigationOptions = {
    title: 'Recipes',
  }


  componentDidMount() {
    var str = "butter,crust,flour,eggs.sugar"
    var url = "http://127.0.0.1:3000/results?food="
    axios.get(url+str)
      .then((response) => {
        console.log(response);
        this.setState({ data : response.data })
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>List of recipes</Text>
        <List recipes={this.state.data}/>
      </View>
    );
  }
}

const SeeFood = StackNavigator({
  Home: { screen: RecipeList },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
