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
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
  },
  author: {
    color: '#999',
  },
  text: {
    color: '#666',
  },
});
