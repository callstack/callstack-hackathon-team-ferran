import React from 'react';
import {
  Platform,
  StatusBar
} from 'react-native';
import {
  NavigationStyles,
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';

import router from './router';

const defaultAnimation = Platform.OS === 'ios' ?
  NavigationStyles.SlideHorizontalIOS
  : NavigationStyles.SlideVertical;

const defaultRouteConfig = {
  styles: {
    ...defaultAnimation,
  },
  navigationBar: {
    backgroundColor: '#2196F3',
    tintColor: 'white',
  },
};

const Root = () => (
  <NavigationProvider router={router}>
    <StatusBar
      backgroundColor="#0D47A1"
      barStyle="light-content"
    />
      <StackNavigation
        initialRoute="home"
        defaultRouteConfig={defaultRouteConfig}
      />
  </NavigationProvider>
);

Root.displayName = 'Root';

export default Root;
