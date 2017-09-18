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
    let recipe = this.props.navigation.state.params.recipeDetails
    let instructions = recipe.analyzedInstructions[0].steps
    let ingredients = recipe.extendedIngredients
    return(
      <ScrollView style={styles.background}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <View>
          <Text style={styles.subTitle}>Ingredients</Text>
          {ingredients.map(function(ingredient, i) {
            return <Text key={i} style={styles.detailLine}>{ingredient.name}</Text>
          })}
        </View>
        <View>
          <Text style={styles.subTitle}>Directions</Text>
          {instructions.map(function(line, i) {
            return <Text key={i} style={styles.detailLine}>{line.step}</Text>
          })}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#000000'
  },
  recipeTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  subTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
    padding: 10,
  },
  detailLine: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 12,
    padding: 10,
  },

})
