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
