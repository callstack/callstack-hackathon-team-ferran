import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class GarbageScheduleScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Garbage Schedule',
    },
  };

  render() {
    return (
      <View style={{flex: 1, padding: 20 }}>
        <Text>Garbage Schedule</Text>
        <Text>
          This is the data!
          {Object.keys(this.props.route.params.data.schedule).length}
        </Text>
      </View>
    );
  }
}

