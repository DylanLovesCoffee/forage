import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import { NavigationActions } from "react-navigation";
import axios from 'axios';
import Recipe from './components/recipeList/Recipe'
import List from './components/recipeList/List'
import RecipeScreen from './components/recipeList/RecipeScreen'
import Login from './components/account/Login'
import Registration from './components/account/Registration'
import RegistrationForm from './components/account/RegistrationForm'
import RecipeList from './components/Screens/RecipeList';
import AppCamera from './components/camera/AppCamera';
import UserProfile from './components/profile/UserProfile'

const Left = StackNavigator({
  Home: { screen: UserProfile },
  RecipeList: { screen: RecipeList },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
   }
},)
const Auth = TabNavigator({
  Login: { screen: Login },
  Register: { screen: RegistrationForm }
})
const Main = TabNavigator({
  Profile: { screen: Left },
  Camera: { screen: AppCamera }
})
const SeeFood = StackNavigator({
  Home: { screen: Auth },
  Main: { screen: Main }
},
{ headerMode: 'none' })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);