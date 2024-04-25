import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../gui/Title';

export default function PrivacyAbout({ returnTap }) {
  return (
    <TouchableOpacity style={styles.container} onPress={returnTap}>
      <View style={styles.privacyAndAbout}>
        <Text style={styles.heading}>Privacy</Text>
        <Text style={styles.text}>
          Your messages are not sent anywhere else. They never leave your
          device.
        </Text>
        <Text style={styles.text}>
          The only people who see your messages are those you show them to.
        </Text>
        <Text style={styles.text}>
          You own this app forever. No registration, no logging in, no nags to
          upgrade.{'\n'}
        </Text>
        <Text style={styles.heading}>About TextFlash</Text>
        <Text style={styles.text}>Developer: John McNamara</Text>
        <Text style={styles.text}>
          Coming in Version 2:{'\n'}- Tickertape & scrolling options
          {'\n'}- User-customisable colours & fonts.{'\n'}- Ability to save
          favourite words & phrases & emojis.{'\n'}- Education packs for parents
          and teachers.{'\n'}
          {'\n'}ETA: Q3 2024.
        </Text>
        <Text style={styles.heading}>TAP ANYWHERE TO GO BACK</Text>
      </View>
      <View style={styles.titleContainer}>
        <Title />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: 'rgb(71, 12, 122)',
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
