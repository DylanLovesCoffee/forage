import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import AppCamera from '../camera/AppCamera';
import Clarifai from '../utilities/Clarifai'
import App from '../../App'
import RecipeList from '../Screens/RecipeList'

export default class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      userFirstName: "Dylan",
      recipeList: ds.cloneWithRows(
        ['Lasagna Roll Ups', "Spaghetti all'Amatriciana", 'Baked Ziti', 'Best Tuna Casserole']
      ),
      search: ''
    };
  }

  _onPress = () => {
    this.props.navigation.navigate("Cam");
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={styles.username}>Hello, {this.state.userFirstName}</Text>
        </View>
        <View style={styles.favorites}>
          <Text style={styles.favText}>Favorites</Text>
        </View>
        <ListView
        dataSource={this.state.recipeList}
        renderRow={(rowData) =>
          <View style={styles.text}>
            <Text style={styles.dataText}>{rowData}</Text>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    backgroundColor: '#c0392b'
  },
  username: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  dataText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#34495e',
    padding: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  text: {
    marginTop: 40
  },
  favorites: {
    padding: 10,
  },
  favText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  }
})
