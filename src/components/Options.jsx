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
        {displayMode == 'Word Flash'
          ? 'Display per word: '
          : 'Tickertape speed:'}
        {displayMode == 'Word Flash' ? displayTime : null}s
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        {repeat ? 'Repeat: YES' : 'Repeat: NO'}
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        Showing in {orientIn ? 'LANDSCAPE' : 'PORTRAIT'}
      </Button>
      <Button style={styles.button}>Sounds OFF</Button>
      <Button style={styles.button}>Border colors ON</Button>
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
      colors: { primary: 'white' },
    },
    margin: 4,
    backgroundColor: '#260707',
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
