import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.color3};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
