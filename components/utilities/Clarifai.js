import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Clarifai extends Component {

  callClarifai(image) {
    let imgUrl = image

    fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", {
      method: "POST",
      headers: {
        "Authorization": "Key " + ENV[AUTH_KEY],
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "inputs": [
          { "data":
            { "image":
              { "url": imgUrl }
            }
          }
        ]
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
       return console.log(responseJson);
     })
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
