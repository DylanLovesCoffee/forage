import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { API_KEY } from 'react-native-dotenv'

export default class Clarifai extends Component {

  callClarifai() {
    let imgUrl = "https://static1.squarespace.com/static/548c9344e4b08a093ba313fd/t/56cfa6b020c647897cc48d5b/1456449200691/1-composition-with-variety-of-grocery-products-t-monticello.jpg?format=2500w"

    fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", {
      method: "POST",
      headers: {
        "Authorization": "Key " + API_KEY,
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
