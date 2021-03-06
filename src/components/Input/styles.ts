import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 80%;
  height: 60px;
  background: ${props => props.theme.colors.color2};
  padding: 0 16px;
  border-radius: 5px;
  margin: 30px 0;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.color3};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
