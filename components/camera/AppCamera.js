import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  CameraRoll,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import Camera from 'react-native-camera';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';
import { API_KEY } from 'react-native-dotenv'

export default class AppCamera extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
    }
  }

  static navigationOptions = {
    title: "Scan Your Groceries"
  };

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }

  _getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos'
    })
    .then(response =>
      this.setState({photos: response.edges})
    )
  }


  share = () => {
    let image = this.state.photos[0].node.image.uri
    RNFetchBlob.fs.readFile(image, 'base64')
    .then((data) => {
      console.log("shared")
      console.log(data)
      this.callClarifaiBase(data)
    })
  }

  callClarifaiBase(base) {
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
              { "base64": base }
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
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight onPress={this._getPhotos.bind(this)}>
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[SCAN FOOD]</Text>
          </TouchableHighlight>
        </Camera>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },

});


AppRegistry.registerComponent('AppCamera', () => AppCamera);
