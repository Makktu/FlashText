import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flash Messenger</Text>
      <Text>prototype v.a12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: '#181919',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f3ecec',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
