import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Inglorious Bastards',
    },
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hello from Home Screen</Text>
      </View>
    );
  }
}
