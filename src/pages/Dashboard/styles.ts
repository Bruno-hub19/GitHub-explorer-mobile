import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px 0px;
  background: #353535;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RepositoryItem = styled.TouchableOpacity`
  width: 100%;
  height: 95px;
  padding: 0 10px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background: #252323;
  margin-bottom: 10px;
`;

export const RepositoryItemText = styled.View`
  flex: 1;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const RepositoryName = styled.Text`
  color: #f0f0f7;
  font-size: 15px;
  font-family: 'Roboto-Medium';
`;

export const RepositoryDescription = styled.Text`
  color: #a5a5a5;
  font-size: 11px;
  font-family: 'Roboto-Regular';
`;
