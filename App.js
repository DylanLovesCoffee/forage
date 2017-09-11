import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
} from 'react-navigation';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe';
import List from './components/recipeList/List';
import RecipeScreen from './components/recipeList/RecipeScreen';
import LandingPage from './components/account/LandingPage';
import Login from './components/account/Login';
import Signup from './components/account/Signup';
import RecipeList from './components/Screens/RecipeList';
import AppCamera from './components/camera/AppCamera';
import Home from './components/profile/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Account = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'HOME',
      tabBarIcon: <Icon name="home" size={25} style={styles.tabIcons}/>
    }),
  },
  RecipeList: { screen: RecipeList },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
   }
})

const Scanner = StackNavigator({
  Cam: {
    screen: AppCamera,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: <Icon name="photo-camera" size={25} style={styles.tabIcons}/>,
      title: "CAMERA"
    })
  },
  List: { screen: RecipeList },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    })
  }
})

const SignInSignUp = StackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: ({navigation}) => ({
      header: null,
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: "Login",
    })
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({navigation}) => ({
      title: "Create Account"
    })
  },
})

const Main = TabNavigator({
  Profile: { screen: Account },
  Camera: { screen: Scanner },
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    tintColor: "#232222",
    activeTintColor: "white",
    inactiveTintColor: "#232222",
    labelStyle: { fontSize: 15 },
    style: { backgroundColor: "#000000" },
  },
})

const SeeFood = StackNavigator({
  Home: { screen: SignInSignUp },
  Main: { screen: Main }
},
{ headerMode: 'none' })

const styles = StyleSheet.create({
  tabIcons: {
    flex: 1,
    color: '#434343',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
