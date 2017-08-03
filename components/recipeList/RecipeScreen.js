import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeScreen extends Component {

  render() {
    let instructionsString = this.props.navigation.state.params.instructions
      <View>
        <ScrollView>

          <Text>{instructionsString}</Text>
        </ScrollView>
      </View>
    )
  }
}
