import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView
} from 'react-native';
import AppCamera from '../camera/AppCamera';

export default class UserProfile extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userFirstName: "Dylan",
      recipeList: ds.cloneWithRows(['Recipe1', 'Recipe2', 'Recipe3']),
    };
  }

  static navigationOptions = {
    title: "Profile"
  };

  _onPress = () => {
    this.props.navigation.navigate("Cam");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.state.userFirstName}</Text>
        <ListView
        dataSource={this.state.recipeList}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
  }
})
