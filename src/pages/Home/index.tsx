import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import server from '../../../server.json';
import Feed from './Feed';
import PagerView from 'react-native-pager-view';

import {Container, Header, Text, Tab, Separator} from './styles';

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
const Home: React.FC = () => {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);
  return (
    <Container>
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
        orientation={'vertical'}
        initialPage={0}
      >
        {server.feed.map(item => (
          <View key={item.id}>
            <Feed item={item} play={Number(item.id) === active}/>
          </View>
        ))}
      </PagerView>
    </Container>
  );
};

export default Home;
