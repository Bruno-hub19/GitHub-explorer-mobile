import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px 0px;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  height: 70px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  background: ${props => props.theme.colors.primary};
`;

export const ThemeOption = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Roboto-Medium';
  font-size: 16px;
`;
