import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#333333',
    fontWeight: 'bold',
  },
});
