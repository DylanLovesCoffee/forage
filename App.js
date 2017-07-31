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
import axios from 'axios';
import Recipe from './components/recipeList/Recipe'
import List from './components/recipeList/List'
import RecipeScreen from './components/recipeList/RecipeScreen'
import Login from './components/account/Login'
import Registration from './components/account/Registration'
import Profile from './components/Tabs/Profile';
import RecipeList from './components/Tabs/RecipeList';


const Recipes = StackNavigator({
  Home: { screen: RecipeList },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
   }
})

const SeeFood = TabNavigator({
  Recipes: { screen: Recipes },
  Profile: { screen: Profile }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
