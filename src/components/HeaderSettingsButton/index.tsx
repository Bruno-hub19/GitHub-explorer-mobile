import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { CustomButton } from './styles';

const HeaderSettingsButton: React.FC<TouchableOpacityProps> = props => {
  const navigation = useNavigation();

  return (
    <CustomButton {...props} onPress={() => navigation.navigate('Preferences')}>
      <Icon name="settings" size={22} color="#a5a5a5" />
    </CustomButton>
  );
};

export default HeaderSettingsButton;
