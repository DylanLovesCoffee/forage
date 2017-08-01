import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { API_KEY } from 'react-native-dotenv'

export default class Clarifai extends Component {

  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.callClarifai = this.callClarifai.bind(this)
    this.search = this.search.bind(this)
  }

  callClarifai(url) {
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
              { "url": url }
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

  search() {
    console.log(this.state.search);
    this.callClarifai(this.state.search)
  }

  render() {
    return(
      <View>
        <TextInput
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="image URL"
          placeholderTextColor="black"
          returnKeyType="next"
          onChangeText = {(text) => this.setState({search: text})}
          value={this.state.search}
          autoCorrect={false}
        />
        <Button
          onPress={this.search}
          title="Call Clarifai"
          color="#841584"
        />
      </View>
    )
  }


}
