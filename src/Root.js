import React from 'react';
import { Platform } from 'react-native';
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
};

const Root = () => (
  <NavigationProvider router={router}>
      <StackNavigation
        initialRoute="home"
        defaultRouteConfig={defaultRouteConfig}
      />
  </NavigationProvider>
);

Root.displayName = 'Root';

export default Root;
