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
import axios from 'axios';
import Recipe from './components/Recipe'
import List from './components/List'

export default class SeeFood extends Component {

  constructor() {
    super();
    this.state = {
      data : [{title: 'boom pie'}, {title: 'boom pizza'}]
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
      </View>
    );
  }
}

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
