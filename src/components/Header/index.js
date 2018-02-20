import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
