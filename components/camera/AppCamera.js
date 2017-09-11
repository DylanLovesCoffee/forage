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
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AppCamera extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
      items: ''
    }
  }

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err))
    .then(this.getPhotos)
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos'
    })
    .then(response =>
      this.setState({photos: response.edges})
    )
    .then(this.share)
  }

  share = () => {
    let image = this.state.photos[0].node.image.uri
    RNFetchBlob.fs.readFile(image, 'base64')
    .then((data) => {
      this.callClarifaiBase(data)
    })
  }

  callClarifaiBase(base) {
    let helpMe = this

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
      let ingredients = ''
       console.log(responseJson.outputs[0].data.concepts)
       responseJson.outputs[0].data.concepts.forEach(function(ingredient) {
         if (ingredient.value > 0.80) {
           ingredients += ',' + ingredient.name
         };
         console.log(ingredients)
       });
       this.setState({ items: ingredients })
       setTimeout(
         () => { helpMe.props.navigation.navigate("List", {name: this.state.items}) },
         2000
       )
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
          aspect={Camera.constants.Aspect.fill}
          keepAwake={true}
          captureTarget={Camera.constants.CaptureTarget.cameraRoll}
        >
          <TouchableHighlight>
              <Text style={styles.capture}  onPress={this.takePicture.bind(this)}><Icon name="camera" size={50}/></Text>
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
    borderRadius: 5,
    color: '#D3D3D3',
    padding: 10,
    margin: 40
  },

});


AppRegistry.registerComponent('AppCamera', () => AppCamera);
