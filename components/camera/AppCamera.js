import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  CameraRoll,
  TouchableHighlight,
} from 'react-native';
import Camera from 'react-native-camera';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';
import { API_KEY } from 'react-native-dotenv';
// import { Icon, Button } from 'native-base';

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
    .catch(err => console.error(err))
    .then(this.getPhotos);
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos'
    })
    .then(response =>
      this.setState({photos: response.edges})
    )
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

   share = () => {
     let image = this.state.photos[0].node.image.uri
     RNFetchBlob.fs.readFile(image, 'base64')
     .then((data) => {
       this.callClarifaiBase(data)
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
          <TouchableHighlight>
              <Text style={styles.capture}  onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </TouchableHighlight>
          <Button onPress={this.share} title="Send to Clarifai"/>
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
