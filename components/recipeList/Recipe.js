import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Recipe extends Component {
  render() {

    let {title, navigate} = this.props
    return(
      <Button
        onPress={() => navigate('Recipe', { title: title })}
        title={title}
      />
    )
  }
}
