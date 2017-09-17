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
import RecipeButton from './components/recipeList/RecipeButton';
import RecipeScreen from './components/recipeList/RecipeScreen';
import LandingPage from './components/account/LandingPage';
import Login from './components/account/Login';
import Signup from './components/account/Signup';
import RecipeList from './components/recipeList/RecipeList';
import AppCamera from './components/camera/AppCamera';
import Home from './components/profile/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Account = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Favorites',
      header: null,
      tabBarIcon: <Icon name="favorite" size={25} style={styles.tabIcons}/>
    }),
  },
  // RecipeList: { screen: RecipeList },
  // Recipe: {
  //   screen: RecipeScreen,
  //   navigationOptions: ({navigation}) => ({
  //     title: `${navigation.state.params.title}`,
  //   }),
  //  }
})

const Camera = StackNavigator({
  Cam: {
    screen: AppCamera,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: <Icon name="photo-camera" size={25} style={styles.tabIcons}/>,
      title: "Camera",
      header: null,
    })
  },
  List: {
    screen: RecipeList,
    navigationOptions: ({navigation}) => ({
      title: "Recipes",
    })
  },
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

const App = TabNavigator({
  Profile: { screen: Account },
  Camera: { screen: Camera },
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

const Forage = StackNavigator({
  Splash: { screen: SignInSignUp },
  Main: { screen: App }
}, {
  headerMode: 'none'
});

const styles = StyleSheet.create({
  tabIcons: {
    flex: 1,
    color: '#434343',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Forage', () => Forage);
