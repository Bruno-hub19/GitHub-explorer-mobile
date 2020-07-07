import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px 0px 20px;
  background: ${props => props.theme.colors.color1};
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  /* border-radius: 5px; */
  border-left-width: 2px;
  border-color: #a5a5a5;
`;

export const ThemeOption = styled.Text`
  color: ${props => props.theme.colors.color3};
  font-family: 'Roboto-Medium';
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
