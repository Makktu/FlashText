import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Flasher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    backgroundColor: 'cyan',
    borderRadius: 16,
    // marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1 – worth looking at design
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
