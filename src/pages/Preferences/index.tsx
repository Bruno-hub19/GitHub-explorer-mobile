import React, { useState, useCallback } from 'react';
import { Switch } from 'react-native';

import { useCustomTheme } from '../../hooks/customTheme';
import { Container, OptionsContainer, ThemeOption } from './styles';

const Preferences: React.FC = () => {
  const { toggleTheme, themeInUse } = useCustomTheme();

  const [isEnabled, setIsEnabled] = useState(themeInUse.title === 'dark');

  const handleToggleSwitch = useCallback(() => {
    toggleTheme();
    setIsEnabled(previousState => !previousState);
  }, [toggleTheme]);

  return (
    <Container>
      <OptionsContainer>
        <ThemeOption>Dark Mode</ThemeOption>
        <Switch
          trackColor={{ false: '#a5a5a5', true: '#232325' }}
          thumbColor="#f0f0f7"
          onValueChange={handleToggleSwitch}
          value={isEnabled}
        />
      </OptionsContainer>
    </Container>
  );
};

export default Preferences;
