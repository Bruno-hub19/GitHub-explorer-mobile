import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CustomButton } from './styles';

const IconButton: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
  <CustomButton {...rest}>{children}</CustomButton>
);

export default IconButton;
