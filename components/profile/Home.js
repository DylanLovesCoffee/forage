import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppCamera from '../camera/AppCamera';
import App from '../../App'

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
      <View style={styles.background}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.name}>
          <Text style={styles.welcome}>Hello, {this.state.userFirstName}</Text>
        </View>
        <ListView
        dataSource={this.state.recipeList}
        renderRow={(rowData) =>
          <View style={styles.listContainer}>
            <Text style={styles.listText}>{rowData}</Text>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000000'
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginTop: 20,
  },
  listText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: '#434343',
    overflow: 'hidden',
  },
  listContainer: {
    marginTop: 40
  },
})
