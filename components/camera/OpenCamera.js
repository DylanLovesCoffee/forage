import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class OpenCamera extends Component {

  static navigationOptions = {
    title: "Camera"
  };

  _onPress = () => {
    this.props.navigation.navigate("AppCam");
  }

  render() {
    return(
      <View style={{padding:10, flex:1}}>
        <Button
          title="Open Camera"
          onPress={this._onPress} />
      </View>
    )
  }

}
