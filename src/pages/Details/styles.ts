import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px 0px;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

export const RepositoryHeader = styled.View`
  width: 100%;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-color: #a5a5a5;
  align-items: center;
`;

export const RepositoryAvatar = styled.View`
  width: 100%;
  height: 130px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const RepositoryFullName = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Roboto-Medium';
  font-size: 20px;
  text-align: center;
`;

export const RepositoryOwner = styled.Text`
  color: #a5a5a5;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RepositoryInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const RepositoryStars = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const RepositoryForks = styled(RepositoryStars)``;

export const RepositoryIssues = styled(RepositoryStars)``;

export const EntityTitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a5a5a5;
  font-size: 16px;
`;

export const EntityCount = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${props => props.theme.colors.text};
  font-size: 22px;
`;

export const IssueItem = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const IssueTitle = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  margin-bottom: 10px;
`;

export const IssueUser = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a5a5a5;
  font-size: 13px;
`;
