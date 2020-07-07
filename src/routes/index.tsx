import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { useCustomTheme } from '../hooks/customTheme';
import HeaderSettingsButton from '../components/HeaderSettingsButton';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Preferences from '../pages/Preferences';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { themeInUse } = useCustomTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerRight: () => <HeaderSettingsButton />,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTransparent: true,
          headerTintColor: themeInUse.colors.color3,
        }}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences}
        options={{
          headerTransparent: true,
          headerTintColor: themeInUse.colors.color3,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
