import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button,
} from 'react-native-elements'
import Router from '../router';
import {notify} from '../services/slackService';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Garbage Collector
        </Text>
        <Button
          title="Garbage Schedule"
          backgroundColor="#0090F7"
          icon={{name: 'trash', type: 'font-awesome'}}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => {
            this.props.navigator.push(Router.getRoute('garbage'));
          }}
        />
        <Button
          title="Garbage Monster"
          backgroundColor="#E91E63"
          buttonStyle={styles.button}
          icon={{name: 'bell-o', type: 'font-awesome'}}
          textStyle={styles.buttonText}
          onPress={() => {
            this.props.navigator.push(Router.getRoute('conference'));
          }}
        />
        <Button
          title="Slack User"
          backgroundColor="#009688"
          buttonStyle={styles.button}
          icon={{name: 'slack', type: 'font-awesome'}}
          textStyle={styles.buttonText}
          onPress={() => {
            notify(`:sos: Hey <@ferrannp>, take care of the garbage can!!!`, [
              {
                image_url: 'https://media.giphy.com/media/oBJ3iITOA7mBG/giphy.gif',
                color: "#ff2d38"
              }
            ], '#garbage_private');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginBottom: 24,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    marginVertical: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonText: {
    fontSize: 18,
  }
});
