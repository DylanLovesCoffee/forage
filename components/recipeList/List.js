import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Recipe from './Recipe'

export default class List extends Component {

  render() {
    let {recipes, navigate} = this.props
    return(
      <View>
        {recipes.map(function(recipe, i) {
          return <Recipe navigate={navigate} title={recipe.title} key={i} />
        })}
      </View>
          )
  }
}
