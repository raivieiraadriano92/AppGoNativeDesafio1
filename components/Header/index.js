import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  headerTitle: {
    color: '#333',
    fontWeight: 'bold',
  },
});

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
