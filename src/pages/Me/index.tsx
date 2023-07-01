import React from 'react';
import { ScrollView, Image } from 'react-native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Title,
  Header,
  Username,
  Content,
  Stats,
  Separator,
  StatsText,
  StatsColumn,
  StatsNumber,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Bookmark,
} from './styles';

const Me: React.FC = () => {
  return (
    <Container>
      <Header>
        <AntDesign
          style={{ position: 'absolute', left: 10, top: 10 }}
          name="adduser"
          size={24}
          color="black"
        />
        <Title>Zelensky</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          style={{ position: 'absolute', right: 13, top: 12 }}
          name="ellipsis-v"
          size={24}
          color="black"
        />
      </Header>
      <ScrollView>
        <Content>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 75,
            }}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/Volodymyr_Zelensky_%2851941720577%29_%28cropped%29.jpg',
            }}
          />

          <Username>@zelensky</Username>
          <Stats>
            <StatsColumn>
              <StatsNumber>1950</StatsNumber>
              <StatsText>Following</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>650</StatsNumber>
              <StatsText>Followers</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>950</StatsNumber>
              <StatsText>Likes</StatsText>
            </StatsColumn>
          </Stats>
          <ProfileColumn>
            <ProfileEdit>
              <ProfileText>Edit profile</ProfileText>
            </ProfileEdit>
            <Bookmark name="bookmark" size={24} color="black" />
          </ProfileColumn>

          <StatsText>Tap to add bio</StatsText>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Me;
