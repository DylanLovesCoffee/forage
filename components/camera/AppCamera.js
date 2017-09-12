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
  Vibration,
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
    this.getPhotos = this.getPhotos.bind(this)
  }

  takePicture() {
    Vibration.vibrate()
    const options = {};
    this.camera.capture({metadata: options})
    .catch(err => console.error(err))
    .then(this.getPhotos)
  }

  async getPhotos() {
    let response = await CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos'
    });
    let savePhoto = await this.setState({photos: response.edges});
    this.reachClarifai()
  }

  async reachClarifai() {
    let image = this.state.photos[0].node.image.uri
    let response = await RNFetchBlob.fs.readFile(image, 'base64')
    this.Clarifai(response)
  }

  async Clarifai(base) {
    let response = await fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", {
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
    });
    let body = await response.json();
    let list = await body.outputs[0].data.concepts.map(function(i) {
      if (i.value > 0.83) {
        return i.name;
      }
    });
    let ingredients = await (Array.from(new Set(list))).filter(function(i) {
      return i !== undefined
    })
    this.setState({ items: ingredients.join(', ') })
    // this.props.navigation.navigate("List", {name: this.state.items})
    // Should render some sort of loading image on the camera before navigation
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
              <Text
                style={styles.capture}  onPress={this.takePicture.bind(this)}
              >
                <Icon name="camera" size={40}/>
              </Text>
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
