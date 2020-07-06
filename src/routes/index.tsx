import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        headerTransparent: true,
        headerTintColor: '#f0f0f7',
      }}
    />
  </Stack.Navigator>
);

export default Routes;
