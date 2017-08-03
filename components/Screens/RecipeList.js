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
import { RFN_KEY } from 'react-native-dotenv';

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
    var str = this.props.navigation.state.params.name
    var url = "https://protected-mesa-93226.herokuapp.com/results?food="
    // var key = "&api_key=" + RFN_KEY
    axios.get(url + str)
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
