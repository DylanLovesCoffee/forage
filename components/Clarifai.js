import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Clarifai extends Component {

  callClarifai() {
    fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", {
      method: "POST",
      headers: {
        "Authorization": "Key ed7a86a0f382417bb16c3bb3917407e5",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "inputs": [ { "data": { "image": { "url": "https://samples.clarifai.com/food.jpg" } } } ]
      })
    })
    // .then((response) => {
    //   console.log(response.json)
    // })
  }

  render() {
    return(
      <View>
        <Button
          onPress={this.callClarifai}
          title="Call Clarifai"
          color="#841584"
        />
      </View>
    )
  }


}
