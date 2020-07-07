import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useCustomTheme } from '../../hooks/customTheme';
import { CustomButton } from './styles';

const HeaderSettingsButton: React.FC<TouchableOpacityProps> = props => {
  const navigation = useNavigation();

  const { themeInUse } = useCustomTheme();

  return (
    <CustomButton {...props} onPress={() => navigation.navigate('Preferences')}>
      <Icon name="settings" size={22} color={themeInUse.colors.color3} />
    </CustomButton>
  );
};

export default HeaderSettingsButton;
