import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

import server from '../../../../server.json';
import Feed from '../Feed';

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

const FollowedContent: React.FC = () => {
  const [active, setActive] = useState(0);
  const [feeds, setFeeds] = useState([]);

  const mapFeeds: (feeds: Feed[]) => JSX.Element[] = (feeds: Feed[]) =>
    feeds.map(item => (
      <View key={item.id}>
        <Feed item={item} play={Number(item.id) === active} />
      </View>
    ));

  return (
    <PagerView
      style={styles.pagerView}
      orientation="vertical"
      initialPage={0}
      onPageSelected={e => setActive(e.nativeEvent.position)}
    >
      {mapFeeds(server.feed)}
    </PagerView>
  );
};

export default FollowedContent;
