/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import Camera from 'react-native-camera';

import Router from '../router';

export default class GarbageScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Garbage',
    },
  };
  
  state = {
    showCamera: false,
  };
  
  _onBarCodeRead = (data) => {
    this.props.navigator.push(Router.getRoute('garbage'), { data })
  };
  
  _goToHome = () => {
    this.props.navigator.pop();
  };
  
  render() {
    return (
      <Camera
        ref={(cam) => {
        this.camera = cam;
      }}
        style={styles.preview}
        onBarCodeRead={this._onBarCodeRead}
        aspect={Camera.constants.Aspect.fill}
      >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        <Button
          raised
          title="Cancel"
          buttonStyle={styles.cancelButton}
          textStyle={styles.textButton}
          onPress={this._goToHome}
        />
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  cancelButton: {
    backgroundColor: '#B71C1C',
    marginBottom: 48,
    paddingHorizontal: 56,
  },
  textButton: {
    fontSize: 18,
  }
});
