import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Button
} from 'react-native-elements'
import Router from '../router';
import garbageMock from '../mocks/garbageMock.json';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Inglorious Bastards',
    },
  };
  render() {
    return (
      <View style={{flex: 1, padding: 20 }}>
        <Button
            title="Garbage"
            backgroundColor="#0090F7"
            icon={{name: 'trash', type: 'font-awesome'}}
            onPress={() => {
              this.props.navigator.push(Router.getRoute('garbageSchedule', { data: garbageMock }));
            }}
        />
      </View>
    );
  }
}
