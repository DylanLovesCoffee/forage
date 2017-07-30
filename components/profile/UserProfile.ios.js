import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import AppCamera from '../camera/AppCamera';
import { Icon } from 'react-native-elements';

export default class UserProfile extends Component {

  static navigationOptions = {
    title: "Profile"
  };

  _onPress = () => {
    this.props.navigation.navigate("Cam");
  }

  constructor() {
    super();
    this.state = {
      userFirstName: "User's First Name - DYNAMIC",
      recipeList: undefined
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.state.userFirstName}</Text>
        <Text>List Recipes Here: {this.state.recipeList}</Text>
        <View style={styles.container}>
          <Button
            title="Open Camera"
            onPress={this._onPress} />
        </View>
      </View>
    );
  }
}

// const NavConfig = {
//   Cam: { screen : OpenCamera },
//   AppCam: { screen : AppCamera },
// };
//
// const NavTab = StackNavigator(NavConfig)

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
  }
})
