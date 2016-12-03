import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import _ from 'lodash';
import Router from '../router';

import { getPhotoByName } from '../services/imagesService';

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
    const garbageList = _.map(schedule, (item, key) => ({ ...item, name: key, avatar_url: getPhotoByName(key)}));

    return (
      <View style={{flex: 1 }}>
        <List containerStyle={styles.containerStyle}>
          {
            garbageList.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
                subtitle={GarbageScheduleScreen.getSubtitle(l.from, l.to)}
                hideChevron
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                avatarStyle={styles.avatar}
                onPress={() => {
                  this.props.navigator.push(Router.getRoute('garbage_monster', { who: l.name }));
                }}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#cbd2d9',
  },
  avatar: {
    alignSelf: 'center',
    height: 56,
    width: 56,
    borderRadius: 56/2,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  }
});
