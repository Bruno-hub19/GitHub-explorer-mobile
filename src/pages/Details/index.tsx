import React, { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { useRoute, Route } from '@react-navigation/native';

import api from '../../services/api';
import {
  Container,
  RepositoryHeader,
  RepositoryAvatar,
  RepositoryFullName,
  RepositoryOwner,
  RepositoryInfo,
  RepositoryStars,
  RepositoryForks,
  RepositoryIssues,
  EntityTitle,
  EntityCount,
  IssueItem,
  IssueTitle,
  IssueUser,
} from './styles';

interface DetailsRouteParams extends Route<string> {
  params: {
    repositoryFullName: string;
  };
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Details: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRoute<DetailsRouteParams>();

  useEffect(() => {
    api
      .get<Repository>(`/repos/${params.repositoryFullName}`)
      .then(response => {
        const repositoryData = response.data;

        setRepository(repositoryData);
      });

    api
      .get<Issue[]>(`/repos/${params.repositoryFullName}/issues`)
      .then(response => {
        const issuesData = response.data;

        setIssues(issuesData);
      });
  }, [params.repositoryFullName]);

  return (
    <Container>
      <RepositoryHeader>
        <RepositoryAvatar>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 120,
            }}
            source={{
              uri: repository?.owner.avatar_url,
            }}
          />
        </RepositoryAvatar>

        <RepositoryFullName>{repository?.full_name}</RepositoryFullName>
        <RepositoryOwner>{repository?.owner.login}</RepositoryOwner>

        <RepositoryInfo>
          <RepositoryStars>
            <EntityCount>{repository?.stargazers_count}</EntityCount>
            <EntityTitle>Stars</EntityTitle>
          </RepositoryStars>

          <RepositoryForks>
            <EntityCount>{repository?.forks_count}</EntityCount>
            <EntityTitle>Forks</EntityTitle>
          </RepositoryForks>

          <RepositoryIssues>
            <EntityCount>{repository?.open_issues_count}</EntityCount>
            <EntityTitle>Issues</EntityTitle>
          </RepositoryIssues>
        </RepositoryInfo>
      </RepositoryHeader>

      <FlatList
        data={issues}
        showsVerticalScrollIndicator={false}
        keyExtractor={issue => issue.html_url}
        renderItem={({ item: issue }) => (
          <IssueItem>
            <IssueTitle>{issue.title}</IssueTitle>
            <IssueUser>{issue.user.login}</IssueUser>
          </IssueItem>
        )}
      />
    </Container>
  );
};

export default Details;
