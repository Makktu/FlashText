import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import React from 'react';

export default function Options({
  startDisplay,
  displayTimeHandler,
  repeatHandler,
  displayMode,
  displayTime,
  repeat,
  orientIn,
  toggleUserOrientation,
  toggleSounds,
  soundsOn,
  toggleColors,
  darkOn,
  toggleStyle,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.goButtonContainer}>
        <Button mode='contained' style={styles.goButton} onPress={startDisplay}>
          GO!
        </Button>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Tap Buttons to Change Options</Text>
      </View>
      <Button onPress={displayTimeHandler} style={styles.button}>
        Time per word: {displayTime}s
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        {repeat ? 'Message Repeat: YES' : 'Message Repeat: NO'}
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        Display: {orientIn ? 'LANDSCAPE' : 'PORTRAIT'}
      </Button>
      <Button onPress={toggleSounds} style={styles.button}>
        Sounds:
        {soundsOn == 0 ? 'OFF' : soundsOn == 1 ? 'Starting Beep' : 'All Beeps'}
      </Button>
      <Button onPress={toggleColors} style={styles.button}>
        Border colors ON
      </Button>
      <Button onPress={toggleStyle} style={styles.button}>
        Message Style: {darkOn == 0 ? 'DARK' : 'LIGHT'}
      </Button>
      <Button style={styles.button}>Privacy & About</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 40,
  },
  button: {
    theme: {
      colors: { primary: '#f4efef' },
    },
    margin: 4,
    backgroundColor: '#e1e6f4',
    fontSize: 24,
    padding: 6,
    height: 60,
    width: 300,
  },
  goButtonContainer: {
    marginBottom: 8,
  },
  goButton: {
    height: 40,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    color: 'red',
  },
});
