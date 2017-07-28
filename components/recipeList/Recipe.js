import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Recipe extends Component {
  render() {
    let {title} = this.props
    return(
      <Text>{title}</Text>
    )
  }
}
