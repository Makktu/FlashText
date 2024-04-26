import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../gui/Title';

export default function PrivacyAbout({ returnTap }) {
  return (
    <TouchableOpacity style={styles.container} onPress={returnTap}>
      <View style={styles.privacyAndAbout}>
        <View style={styles.titleContainer}>
          <Title />
        </View>
        <Text style={styles.heading}>Privacy</Text>
        <Text style={styles.text}>
          Your messages are not sent anywhere.{'\n'}They do not leave your
          device.
        </Text>
        <Text style={styles.text}>
          The only people who see your messages are those you show them to.
        </Text>
        <Text style={styles.text}>
          You own the app forever.{'\n'}No registration, no logging in, no nags
          to upgrade.{'\n'}
        </Text>
        <Text style={styles.heading}>About FlashText</Text>
        <Text style={styles.text}>Developer: John McNamara</Text>
        <Text style={styles.text}>
          Coming in Version 2:{'\n'}- Tickertape & scrolling options
          {'\n'}- User-customisable colours & fonts.{'\n'}- Ability to save
          favourite words & phrases & emojis.{'\n'}- Education packs for parents
          and teachers.{'\n'}
          {'\n'}ETA: Q4 2024.
        </Text>
        <Text style={styles.heading}>Tap anywhere to close this screen.</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: 'rgb(12, 89, 122)',
  },
  privacyAndAbout: {
    marginTop: 60,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    color: 'white',
  },
  heading: {
    fontSize: 22,
    marginVertical: 4,
    marginHorizontal: 16,
    color: 'yellow',
  },
  titleContainer: {
    margin: 38,
  },
});
