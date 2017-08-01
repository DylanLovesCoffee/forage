import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  CameraRoll,
  TouchableHighlight,
} from 'react-native';
import AppCamera from '../camera/AppCamera';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';

export default class PhotoSelection extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
    }
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

  callClarifai(base) {
    fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", {
      method: "POST",
      headers: {
        "Authorization": "Key ed7a86a0f382417bb16c3bb3917407e5",
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
      console.log("shared")
      console.log(data)
      this.callClarifai(data)
      // let shareOptions = {
      //   url: `data:image/jpg;base64,${data}`,
      // }
      // Share.open(shareOptions)
      //   .then((response) => console.log("res:", response))
      //   .catch(error => console.log("err", error))
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Button
          onPress={this._getPhotos}
          title="Get Photos"
        />
        <View style={styles.shareButton}>
          <Button
            title="Share"
            onPress={this.share}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  shareButton: {
    position: "absolute",
    padding: 10,
    bottom: 0,
    left: 0
  }
})
