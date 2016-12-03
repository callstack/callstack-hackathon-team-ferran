import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';
import Beacons from 'react-native-beacons-android'
import { Button } from 'react-native-elements';
import Router from '../router';

import config from '../beaconConfig'

export default class GarbageMonster extends Component {
  static route = {
    navigationBar: {
      title: 'Garbage Monster',
    },
  };
  state = {
    isConnecting: true,
    beaconData: null,
  };
  
  async componentDidMount() {
    Beacons.detectIBeacons();
    try {
      await Beacons.startRangingBeaconsInRegion(config.region.identifier, config.region.uuid);
      console.log(`Beacons ranging started succesfully!`)
    } catch (error) {
      console.log(`Beacons ranging not started, error: ${error}`)
    }

    DeviceEventEmitter.addListener('beaconsDidRange', this._beaconsDidRange);
  }
  
  _beaconsDidRange = (data) => {
    console.log("Beacons found", data);
    const beacons = data.beacons;
    if(beacons.length > 0) {
      const beaconId = Object.keys(config.map)[0];
      const userName = config.map[beaconId];
      const isFound = beacons.find(item => item.major == beaconId);
      if (!isFound) {
        return;
      }
      this._stopRangingBeaconsInRegion(); // We do not need it anymore
      this.setState({beaconData: isFound, isConnecting: false, userName });
    }
  };
  
  _stopRangingBeaconsInRegion = async () => {
    DeviceEventEmitter.removeListener(
      'beaconsDidRange', this._beaconsDidRange
    );
    try {
      await Beacons.stopRangingBeaconsInRegion(config.region.identifier, config.region.uuid);
      console.log(`Beacons monitoring stopped successfully`)
    } catch (error) {
      console.log(`Beacons monitoring stopped with an error: ${error}`)
    }
  };
  
  componentWillUnmount() {
    this._stopRangingBeaconsInRegion();
  }
  
  render() {
    const { isConnecting, beaconData } = this.state;
    return (
      <View style={styles.container}>
        {isConnecting  && (<Text style={styles.beaconText}>Connecting to Beacon...</Text>)}
        {!isConnecting && (
          <View>
            <Text style={styles.beaconText}>FOUND BEACON</Text>
            <Text style={styles.beaconText}>Distance: {beaconData.distance}</Text>
            <Text style={styles.beaconText}>Proximity: {beaconData.proximity}</Text>
            <Button
              title="Poke the Monster"
              backgroundColor="#E91E63"
              buttonStyle={styles.button}
              icon={{name: 'bullhorn', type: 'font-awesome'}}
              textStyle={styles.buttonText}
              onPress={() => {
                this.props.navigator.replace(Router.getRoute('garbage_monster', { who: this.state.userName }));
              }}
            />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beaconText: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    marginVertical: 24,
  },
  buttonText: {
    fontSize: 18,
  }
});

