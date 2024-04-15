import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import React, { useEffect } from 'react';

export default function Options({
  startDisplay,
  displayTimeHandler,
  repeatHandler,
  displayTime,
  repeat,
  orientIn,
  toggleUserOrientation,
  toggleStyle,
  bg,
  txt,
}) {
  let showingBgColor, showingTxtColor;
  let firstBgLetter = bg.charAt(0).toUpperCase();
  let firstTxtLetter = txt.charAt(0).toUpperCase();
  let remainingBgLetters = bg.slice(1);
  let remainingTxtLetters = txt.slice(1);
  showingBgColor = firstBgLetter + remainingBgLetters;
  showingTxtColor = firstTxtLetter + remainingTxtLetters;
  if (showingBgColor[0] == '#') showingBgColor = 'Pink';
  console.log(showingTxtColor, showingBgColor);

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
      <Button onPress={toggleStyle} style={{ backgroundColor: bg }}>
        <Text style={{ color: txt, fontWeight: 'bold' }}>
          Style: {showingTxtColor} on {showingBgColor}
        </Text>
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        {repeat ? 'Message Repeat: YES' : 'Message Repeat: NO'}
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        Display: {orientIn ? 'LANDSCAPE' : 'PORTRAIT'}
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
  darkButton: {
    backgroundColor: 'black',
  },
  lightButton: {
    backgroundColor: 'white',
  },
});
