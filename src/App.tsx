import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { CustomThemeProvider } from './hooks/customTheme';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#353535" />
        <Routes />
      </NavigationContainer>
    </CustomThemeProvider>
  );
};

export default App;
