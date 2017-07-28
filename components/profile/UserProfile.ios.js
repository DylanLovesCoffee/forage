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
      recipeList: undefined
    };
  }

  componentDidMount() {
   axios.get('http://localhost:3000/recipes')
     .then((response) => {
       this.setState({})
     })

    //    (response) => response.json())
    //  .then((responseJson) => {
    //    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //    this.setState({
    //      isLoading: false,
    //      dataSource: ds.cloneWithRows(responseJson.movies),
    //    }, function() {
    //      // do something with new state
    //    });
    //  })
    //  .catch((error) => {
    //    console.error(error);
    //  });
 }

  render() {
    return (
      <View>
        <Text>Hello, {this.state.userFirstName}</Text>
        <Text>List Recipes Here: {this.state.recipeList}</Text>
      </View>
    );
  }
}
