import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

// AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
=======
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe'
import List from './components/recipeList/List'
import RecipeScreen from './components/recipeList/RecipeScreen'
import Login from './components/account/Login'
import Registration from './components/account/Registration'
import NavBar from './components/NavBar';



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
        <Text style={styles.welcome}>List of recipes</Text>
        <List recipes={this.state.data} navigate={navigate}/>
        <Login />
        <Registration />
        {/* <NavBar /> */}
      </View>
    );
  }
}

const SeeFood = StackNavigator({
  Home: { screen: RecipeList },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
   }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
