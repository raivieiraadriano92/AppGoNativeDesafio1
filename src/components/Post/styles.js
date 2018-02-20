import { StyleSheet } from 'react-native';

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
    fontSize: 18,
  },
  author: {
    color: '#999',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  text: {
    color: '#666',
  },
});

export default styles;
