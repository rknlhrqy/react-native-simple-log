import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Log from '../util/Log';
import Data from '../data_model/Data';

export default class Header extends Component {
  myData = new Data();

  renderText = (str) => {
    Log.out('The text is: ' + str);
    this.myData.setData('weather is good!');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is my Header</Text>
        {this.renderText('Hello World!')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
