import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Header from './components/Header';
import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  posts: {
    paddingTop: 20,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'title--',
        author: 'author',
        text: 'text',
      },
      {
        id: 2,
        title: 'title',
        author: 'author',
        text: 'text',
      },
      {
        id: 3,
        title: 'title',
        author: 'author',
        text: 'text',
      },
      {
        id: 4,
        title: 'title',
        author: 'author',
        text: 'text',
      },
      {
        id: 5,
        title: 'title',
        author: 'author',
        text: 'text',
      },
      {
        id: 6,
        title: 'title',
        author: 'author',
        text: 'text',
      },
      {
        id: 7,
        title: 'title',
        author: 'author',
        text: 'text',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNative App" />

        <ScrollView style={styles.posts}>
          {this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} text={post.text} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
