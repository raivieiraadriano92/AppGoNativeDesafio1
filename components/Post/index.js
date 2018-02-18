import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

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

const Post = props => (
  <View style={styles.post}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.author}>{props.author}</Text>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
