import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, FlatList } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import { useCustomTheme } from '../../hooks/customTheme';
import api from '../../services/api';
import Input from '../../components/Input';
import IconButton from '../../components/IconButton';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Content,
  RepositoryItem,
  RepositoryItemText,
  RepositoryName,
  RepositoryDescription,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface SearhRepositoryFormData {
  search: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const { themeInUse } = useCustomTheme();

  const handleSubmit = useCallback(
    async (data: SearhRepositoryFormData, { reset }) => {
      const response = await api.get<Repository>(`/repos/${data.search}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      reset();
    },
    [repositories],
  );

  useEffect(() => {
    async function loadStoragedRepositories() {
      const storagedRepositories = await AsyncStorage.getItem(
        '@gitexplorer/repos',
      );

      if (storagedRepositories) {
        return setRepositories(JSON.parse(storagedRepositories));
      }

      return [];
    }

    loadStoragedRepositories();
  }, []);

  useEffect(() => {
    async function storeRepositories() {
      await AsyncStorage.setItem(
        '@gitexplorer/repos',
        JSON.stringify(repositories),
      );
    }

    storeRepositories();
  }, [repositories]);

  return (
    <Container>
      <Image source={logoImg} />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Content>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="search"
            icon="github"
            placeholder="Digite o autor/repositório"
            returnKeyType="search"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

          <IconButton onPress={() => formRef.current?.submitForm()}>
            <Icon name="search" size={20} color={themeInUse.colors.color1} />
          </IconButton>
        </Content>
      </Form>

      <FlatList
        style={{ width: '100%' }}
        data={repositories}
        showsVerticalScrollIndicator={false}
        keyExtractor={repository => repository.full_name}
        renderItem={({ item: repository }) => (
          <RepositoryItem
            onPress={() =>
              navigation.navigate('Details', {
                repositoryFullName: repository.full_name,
              })
            }
          >
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 5,
                marginRight: 10,
              }}
              source={{
                uri: repository.owner.avatar_url,
              }}
            />
            <RepositoryItemText>
              <RepositoryName>{repository.full_name}</RepositoryName>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
            </RepositoryItemText>
          </RepositoryItem>
        )}
      />
    </Container>
  );
};

export default Dashboard;
