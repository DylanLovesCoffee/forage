import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe';
import List from './components/recipeList/List';
import Login from './components/login/Login';
import Registration from './components/register/Registration';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

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
        <View style={{padding:10, flex:1}}>
          <NavTab />
        </View>
        <Text style={styles.welcome}>List of recipes</Text>
        <List recipes={this.state.data}/>
        <Login />
        <Registration />
      </View>
    );
  }
}

const HomeScreen = () => <Text>Home</Text>;
const CameraScreen = () => <Text>Camera</Text>;

const NavConfig = {
  Home: { screen : HomeScreen, navigationOptions: { title: "Home" } },
  Camera: { screen : CameraScreen },
};

const NavTab = StackNavigator(NavConfig)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },

});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
