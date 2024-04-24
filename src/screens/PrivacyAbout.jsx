import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

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
        <Text style={styles.heading}>About</Text>

        <Text style={styles.text}>
          You own this app forever. No registering for anything. No logging into
          anything. No nags to upgrade to a better version.
        </Text>
        <Text style={styles.text}>Developed by John McNamara</Text>
        <Text style={styles.text}>
          Coming in Version 2: Tickertape-style display options.
          User-customisable colours. Multiple colour styles in messages.
          Different fonts. Ability to save favourite words & phrases & emojis.
          Educational support for parents and teachers. ETA: August 2024.
        </Text>
        <Text style={styles.text}>TAP ANYWHERE TO CLOSE THIS SCREEN</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: 'yellow',
  },
  privacyAndAbout: {
    marginTop: 60,
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    marginVertical: 4,
    marginHorizontal: 16,
  },
});
