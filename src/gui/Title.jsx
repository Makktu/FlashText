import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const logoImg = require('./../../assets/flashtext_logo_e.png');
const tabletLogoImg = require('./../../assets/flashtext_logo_e.png');

export default function Title({ thisDevice = '' }) {
  console.log('>>>', thisDevice);
  if (thisDevice == 'iPad') {
    return (
      <View style={tabletStyles.container}>
        <Image style={tabletStyles.image} source={logoImg} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={logoImg} />
      </View>
    );
  }
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

const tabletStyles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    backgroundColor: 'rgb(44, 0, 81)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
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
    height: 200,
    backgroundColor: '#0553',
  },
});
