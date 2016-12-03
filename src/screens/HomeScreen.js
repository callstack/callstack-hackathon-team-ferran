import React, { Component } from 'react';
import { View, Text } from 'react-native';

import GarbageScreen from './GarbageScreen';

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
        <GarbageScreen />
      </View>
    );
  }
}
