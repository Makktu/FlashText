import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function PrivacyAbout() {
  return (
    <View>
      <Text>
        Your messages are not sent anywhere else. They never leave your phone.
      </Text>
      <Text>
        The only people who see your messages are the people you show them to.
      </Text>
      <Text>Apple wouldn't let us say it if it wasn't true. They'd know.</Text>
      <Text>
        You own this version of the app forever. No registering for anything. No
        logging into anything. No nags to upgrade to a better version.
      </Text>
      <Text>Devloped by John McNamara</Text>
      <Text>
        Planned additions for Version 2: Tickertape-style display options.
        User-customisable colours. Multiple colour styles in messages. Different
        fonts. Ability to save favourite words & phrases & emojis. Educational
        support for parents and teachers. ETA: August 2024.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
