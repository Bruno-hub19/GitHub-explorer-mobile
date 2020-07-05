import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  iconName: string;
}

const Input: React.FC<InputProps> = ({ name, iconName, ...rest }) => (
  <Container>
    <Icon name={iconName} color="#6d6666" size={20} />
    <TextInput
      placeholderTextColor="#6d6666"
      keyboardAppearance="dark"
      {...rest}
    />
  </Container>
);

export default Input;
