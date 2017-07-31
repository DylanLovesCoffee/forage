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
    backgroundColor: '#E0E0E0'
  },
});
