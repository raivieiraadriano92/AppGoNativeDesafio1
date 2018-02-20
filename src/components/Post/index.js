import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

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
