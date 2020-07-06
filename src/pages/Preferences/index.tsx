import React, { useState, useCallback } from 'react';
import { Switch } from 'react-native';

import { Container, OptionsContainer, ThemeOption } from './styles';

const Preferences: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
  }, []);

  return (
    <Container>
      <OptionsContainer>
        <ThemeOption>Dark Mode</ThemeOption>
        <Switch
          trackColor={{ false: '#a5a5a5', true: '#353535' }}
          thumbColor="#f0f0f7"
          onValueChange={handleToggleSwitch}
          value={isEnabled}
        />
      </OptionsContainer>
    </Container>
  );
};

export default Preferences;
