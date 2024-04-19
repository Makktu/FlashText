import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import React from 'react';

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
  userHasTyped,
}) {
  let showingBgColor, showingTxtColor;
  let firstBgLetter = bg.charAt(0).toUpperCase();
  let firstTxtLetter = txt.charAt(0).toUpperCase();
  let remainingBgLetters = bg.slice(1);
  let remainingTxtLetters = txt.slice(1);
  showingBgColor = firstBgLetter + remainingBgLetters;
  showingTxtColor = firstTxtLetter + remainingTxtLetters;
  if (showingBgColor[0] == '#') showingBgColor = 'Pink';

  return (
    <View style={styles.container}>
      <View style={styles.goButtonContainer}>
        <Button
          style={(styles.button, { backgroundColor: userHasTyped })}
          onPress={startDisplay}
        >
          <Text style={styles.buttonText}>
            {userHasTyped == 'green' ? 'GO!' : 'Type a message!'}
          </Text>
        </Button>
      </View>
      <Button onPress={toggleStyle} style={{ backgroundColor: bg }}>
        <Text style={{ color: txt, fontWeight: 'bold', fontSize: 20 }}>
          Style: {showingTxtColor} on {showingBgColor}
        </Text>
      </Button>
      <Button onPress={displayTimeHandler} style={styles.button}>
        <Text style={styles.buttonText}>Time per word: {displayTime}s</Text>
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        <Text style={styles.buttonText}>
          Showing In: {orientIn ? 'LANDSCAPE' : 'PORTRAIT'}
        </Text>
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        <Text style={styles.buttonText}>
          {repeat ? 'Message Repeat: YES' : 'Message Repeat: NO'}
        </Text>
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button style={styles.specialBtn}>Restore Defaults</Button>
        <Button style={styles.specialBtn}>Clear Input</Button>
      </View>
      <Button style={styles.button}>
        <Text style={styles.buttonText}>Privacy & About</Text>
      </Button>
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
    backgroundColor: '#rgb(44, 0, 81)',
    padding: 6,
    marginTop: 12,
    height: 60,
    width: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  goButtonContainer: {
    marginBottom: 8,
  },
  goButton: {
    height: 40,
    backgroundColor: 'green',
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
    backgroundColor: 'rgb(44, 0, 81)',
  },
  specialBtn: {
    backgroundColor: 'gray',
    width: 140,
    marginRight: 4,
  },
});
