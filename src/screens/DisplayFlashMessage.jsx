import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';

export default function DisplayFlashMessage({ message, returnTap }) {
  // ! for debugging
  useEffect(() => {
    console.log('flash screen');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={returnTap}>
        <Text>{message}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgreen',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: '100%',
  },
  touchableArea: {
    height: '100%',
    width: '100%',
  },
});
