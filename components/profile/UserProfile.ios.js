import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "User's First Name - DYNAMIC",
      recipeList: []
    };
  }

  componentDidMount() {
    axios.get ('http://localhost:3000/recipes')
    .then((response) => {
      this.setState({ recipeList : response.data })
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, {this.state.userFirstName}</Text>
        <Text>List User's Used Recipes Here:</Text>
      </View>
    );
  }
}
