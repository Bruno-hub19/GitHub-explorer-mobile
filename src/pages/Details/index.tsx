import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
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
} from './styles';

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

interface DetailsRouteParams extends Route<string> {
  params: {
    repositoryFullName: string;
  };
}

const Details: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const { params } = useRoute<DetailsRouteParams>();

  useEffect(() => {
    async function getRepositoryData() {
      const response = await api.get<Repository>(
        `/repos/${params.repositoryFullName}`,
      );

      const repositoryData = response.data;

      setRepository(repositoryData);
    }

    getRepositoryData();
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
    </Container>
  );
};

export default Details;
