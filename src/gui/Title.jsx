import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flasher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    backgroundColor: 'cyan',
    borderRadius: 16,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // * flex: 1, – this is worth looking at as a design possibility
  },
  text: {
    color: 'black',
    fontSize: 70,
    fontWeight: 'bold',
  },
});
