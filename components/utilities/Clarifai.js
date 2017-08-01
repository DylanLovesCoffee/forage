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
import App from '../../App'
import RecipeList from '../Screens/RecipeList'

export default class Clarifai extends Component {

  constructor() {
    super()
    this.state = {
      search: '',
      data: ''
    }
    this.search = this.search.bind(this)
    boom = this
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
      var str=''
      responseJson.outputs[0].data.concepts.forEach(function(obj) {
        str += ',' + obj.name
      })
      boom.setState({ data: str })
     })
  }

  search() {
    console.log(this.state.search);
    this.callClarifai(this.state.search)
    setTimeout(() => {
      this.props.navigation.navigate('RecipeList', {name: boom.state.data})
    }, 2000);
    }

  render() {
    let { navigate } = this.props.navigation
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
