import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Header from 'components/Header';
import Post from 'components/Post';

import styles from './styles';

const posts = [];

for (let p = 0; p < 10; p++) {
  posts.push({
    id: p,
    title: 'Aprendendo React Native',
    author: 'Raí Vieira Adriano',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
  });
}

export default class App extends Component {
  state = {
    posts: posts,
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
