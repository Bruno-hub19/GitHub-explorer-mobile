import React from 'react';
import { Image, ScrollView } from 'react-native';

import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{ flex: 1 }}
  >
    <Container>
      <Image source={logoImg} />

      <Content>
        <Input
          name="search"
          iconName="github"
          placeholder="repositório/autor"
        />
      </Content>
    </Container>
  </ScrollView>
);

export default Dashboard;
