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
          Inglorious Bastards
        </Text>
        <Button
          title="Garbage"
          backgroundColor="#0090F7"
          icon={{name: 'trash', type: 'font-awesome'}}
          textStyle={styles.buttonText}
          onPress={() => {
            this.props.navigator.push(Router.getRoute('garbage'));
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
