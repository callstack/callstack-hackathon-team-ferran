import React from 'react';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';

import router from './router';

const Root = () => (
  <NavigationProvider router={router}>
      <StackNavigation initialRoute="home" />
  </NavigationProvider>
);

Root.displayName = 'Root';

export default Root;
