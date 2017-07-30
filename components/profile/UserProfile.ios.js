import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import AppCamera from '../camera/AppCamera';

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      userFirstName: "User's First Name - DYNAMIC",
      recipeList: undefined
    };
  }

  static navigationOptions = {
    title: "Profile"
  };

  _onPress = () => {
    this.props.navigation.navigate("Cam");
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

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
  }
})
