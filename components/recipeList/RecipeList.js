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
        { title: "" }
      ],
      loaded: false
    }
  }

  async componentWillMount() {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + this.props.navigation.state.params.name + "&limitLicense=false&number=5&ranking=1"

    let responseJson = await fetch(url, {
      headers: {
        "X-Mashape-Key": RFN_KEY,
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(rJson => this.setState({data: rJson, loaded: true})
)
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.background}>
        {this.state.loaded === true ? this.renderList() : this.renderLoading()}
      </View>
    );
  }

  renderList() {
    let { navigate } = this.props.navigation
    return(
      <View>
        {this.state.data.map(function(recipe, i) {
          return <RecipeButton
            navigate={navigate}
            id={recipe.id}
            title={recipe.title}
            key={i}
          />
        })}
      </View>
    )
  }

  renderLoading() {
    return(
      <Text style={styles.loading}>Loading...</Text>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  loading: {
    color: '#FFFFFF',
  }
});
