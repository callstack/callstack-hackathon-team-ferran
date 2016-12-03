import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';

import Beacons from 'react-native-ibeacon';

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

  componentDidMount() {
    // Request for authorization while the app is open
    Beacons.requestWhenInUseAuthorization();

    Beacons.startMonitoringForRegion(region);
    Beacons.startRangingBeaconsInRegion(region);

    Beacons.startUpdatingLocation();

    // Listen for beacon changes
    const subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        // data.region - The current region
        // data.region.identifier
        // data.region.uuid

        // data.beacons - Array of all beacons inside a region
        //  in the following structure:
        //    .uuid
        //    .major - The major version of a beacon
        //    .minor - The minor version of a beacon
        //    .rssi - Signal strength: RSSI value (between -100 and 0)
        //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
        //    .accuracy - The accuracy of a beacon
        this.setState({
          beaconData: {
            region: data.region,
            identifier: data.region.identifier,
            uuid: data.region.uuid,
            beacons: data.beacons,
            isConnecting: false,
          }
        });
      }
    );
  }

  render() {
    const { isConnecting, beaconData } = this.state;
    return (
      <View style={{flex: 1}}>
        {isConnecting ?
          <Text>Connecting to Beacon...</Text> :
          <View>
            <Text>Region: {beaconData.region}</Text>
            <Text>Identifier: {beaconData.identifier}</Text>
            <Text>UUID: {beaconData.uuid}</Text>
          </View>
        }
      </View>
    )
  }
}
