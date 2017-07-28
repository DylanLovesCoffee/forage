import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Recipe from './Recipe'

export default class List extends Component {

  render() {
    let {recipes} = this.props
    return(
      <View>
        {recipes.map(function(recipe, i) {
          return <Recipe title={recipe.title} key={i} />
        })}
      </View>
          )
  }
}
