import React, { useState, useCallback } from 'react';
import { Switch } from 'react-native';

import { Container } from './styles';

const Preferences: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
  }, []);

  return (
    <Container>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={handleToggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

export default Preferences;
