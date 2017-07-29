import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import Recipe from './components/recipeList/Recipe';
import List from './components/recipeList/List';
import Login from './components/login/Login';
import Registration from './components/register/Registration';
import Camera from 'react-native-camera';

export default class SeeFood extends Component {
  constructor() {
    super();
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/recipes')
      .then((response) => {
        console.log(response);
        this.setState({ data : response.data })
      })
  }
  clickedme(){
    alert("was touched");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>List of recipes</Text>
        <List recipes={this.state.data}/>
        <Login />
        <Registration />
        <View>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <TouchableHighlight onPress={this.clickedme.bind(this)}>
                <View style={{height:50, width:50, backgroundColor:"red"}}></View>
            </TouchableHighlight>
          </Camera>
        </View>
      </View>
    );
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

});

AppRegistry.registerComponent('SeeFood', () => SeeFood);
