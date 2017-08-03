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

export default class UserProfile extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userFirstName: "Dylan",
      recipeList: ds.cloneWithRows(['Lasagna Roll Ups', "Spaghetti all'Amatriciana", 'Baked Ziti', 'Best Tuna Casserole']),
      search: ''
    };
    this.search = this.search.bind(this)
  }

  static navigationOptions = {
    title: "Profile"
  };

  _onPress = () => {
    this.props.navigation.navigate("Cam");
  }

  search(e) {
    console.log(this.state.search);
  }

  render() {
    let { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={styles.username}>Hello, {this.state.userFirstName}</Text>
        </View>
        <ListView
        dataSource={this.state.recipeList}
        renderRow={(rowData) => <View style={styles.text}><Text style={styles.dataText}>{rowData}</Text></View>}
        />
        <Clarifai navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    backgroundColor: '#B3E5FC'
  },
  username: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Cochin',
    fontStyle: 'italic'
  },
  dataText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Cochin',
    color: '#A1887F',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 40
  }
})
