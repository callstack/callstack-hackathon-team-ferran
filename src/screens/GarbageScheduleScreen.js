import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import _ from 'lodash';

import getImages from '../images/getPhotoByName';

export default class GarbageScheduleScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Garbage Schedule',
    },
  };
  static getSubtitle(from, to) {
    return `from ${from} to ${to}`;
  }
  render() {
    const { route: { params } } = this.props;
    const schedule = params.data.schedule;
    const garbageList = _.map(schedule, (item, key) => ({ ...item, name: key, avatar_url: getImages(key)}));

    return (
      <View style={{flex: 1 }}>
        <List containerStyle={{marginBottom: 20}}>
          {
            garbageList.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
                subtitle={GarbageScheduleScreen.getSubtitle(l.from, l.to)}
                hideChevron
              />
            ))
          }
        </List>
      </View>
    );
  }
}
