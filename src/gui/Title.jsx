import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const logoImg = require('./../../assets/textflash_logo3.png');

export default function Title() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoImg} />
      {/* <Text style={styles.text}>TextFlash</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: 'rgb(44, 0, 81)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: 'rgb(169, 134, 203)',
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    position: 'absolute',
    top: 18,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
