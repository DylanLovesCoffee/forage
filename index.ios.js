import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe'
import List from './components/recipeList/List'
import Login from './components/login/Login'

export default class SeeFood extends Component {

  constructor() {
    super();
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/recipes')
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
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C5E1A5'
  }
  
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
