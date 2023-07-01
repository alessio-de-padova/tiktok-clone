import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

import server from '../../../server.json';
import { useSwipe } from '../../hooks/useSwipe';
import Feed from './Feed';

import { Container, Header, Text, Tab, Separator } from './styles';

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

interface Feed {
  id: number;
  username: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
}

const Home: React.FC = () => {
  const [tab, setTab] = useState(1);
  const maxTabs = 2;

  const onSwipeLeft = () => tab !== maxTabs && setTab(prev => prev + 1);
  const onSwipeRight = () => tab !== 0 && setTab(prev => prev - 1);

  const [active, setActive] = useState(0);
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);

  const mapFeeds = (feeds: Feed[]) =>
    feeds.map(item => (
      <View key={item.id}>
        <Feed item={item} play={Number(item.id) === active} />
      </View>
    ));

  return (
    <Container onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Header>
        <Tab onPress={() => setTab(1)}>
          <Text active={tab === 1}>Following</Text>
        </Tab>
        <Separator>|</Separator>
        <Tab onPress={() => setTab(2)}>
          <Text active={tab === 2}>For You</Text>
        </Tab>
      </Header>
      <PagerView
        style={styles.pagerView}
        orientation="vertical"
        initialPage={0}
        onPageSelected={e => setActive(e.nativeEvent.position)}
      >
        {tab === 1 ? mapFeeds(server.feed) : mapFeeds(server.feed2)}
      </PagerView>
    </Container>
  );
};

export default Home;
