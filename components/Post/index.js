import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class Post extends Component<Props> {
  render() {
    return (
      <View style={styles.post}>
        <Text>asdasda</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
  },
});
