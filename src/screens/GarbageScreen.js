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

export default class GarbageScreen extends Component {
  
  state = {
    showCamera: false,
  };
  
  initCamera = () => {
    this.setState({ showCamera: true });
  };
  
  onBarCodeRead = (data) => {
    console.log(data);
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          title="SCAN NOW"
          onPress={this.initCamera}
        />
        {this.state.showCamera ?
          <Camera
            ref={(cam) => {
            this.camera = cam;
          }}
            style={styles.preview}
            onBarCodeRead={this.onBarCodeRead}
            aspect={Camera.constants.Aspect.fill}
          >
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle}/>
            </View>
          </Camera>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  }
});
