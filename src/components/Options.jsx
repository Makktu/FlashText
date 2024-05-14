import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

export default function Options({
  startDisplay,
  minusTimeHandler,
  plusTimeHandler,
  repeatHandler,
  displayTime,
  repeat,
  orientIn,
  toggleUserOrientation,
  toggleStyle,
  bg,
  txt,
  userHasTyped,
  clearInput,
  privacyAbout,
  thisDevice,
}) {
  if (bg == 'random') {
    bg = 'whitesmoke';
  }
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
      {/* _________________ */}
      {/* GO BUTTON */}
      <Button
        style={(styles.button, { backgroundColor: userHasTyped })}
        onPress={startDisplay}
      >
        <Text style={styles.buttonText}>
          {userHasTyped == 'green' ? 'START !' : 'No text entered...'}
        </Text>
      </Button>
      {/* _________________ */}
      {/* COLOR PICKER BUTTON */}
      <Button
        onPress={toggleStyle}
        style={[
          styles.button,
          {
            backgroundColor: bg,
          },
        ]}
      >
        <Text
          style={{
            color: txt,
            fontWeight: 'bold',
            fontSize: 20,
            // lineHeight: 24,
          }}
        >
          {txt == 'random'
            ? 'DYNAMIC RANDOM!'
            : `Style: ${showingTxtColor} on ${showingBgColor}`}
        </Text>
      </Button>
      {/* _________________ */}
      {/* TIME PICKER BUTTON */}
      <View style={styles.timeBtnContainer}>
        <TouchableOpacity onPress={minusTimeHandler}>
          <AntDesign name='minussquare' size={52} color='#c9dbdb' />
        </TouchableOpacity>
        <View style={styles.timeTextContainer}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: 'white',
              marginHorizontal: 4,
            }}
          >
            {displayTime}s{/* {displayTime == 1 ? ' second' : ' seconds'} */}
          </Text>
        </View>
        <TouchableOpacity onPress={plusTimeHandler}>
          <AntDesign name='plussquare' size={52} color='#c9dbdb' />
        </TouchableOpacity>
      </View>
      {/* _________________ */}
      {/* OTHER */}
      <Button onPress={clearInput} style={styles.button}>
        <Text style={styles.buttonText}>Clear Input</Text>
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        <Text style={styles.buttonText}>
          Display:
          {thisDevice == 'iPad'
            ? ' iPad Rotation'
            : orientIn
            ? ' LANDSCAPE'
            : ' PORTRAIT'}
        </Text>
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        <Text style={styles.buttonText}>
          {repeat ? 'Message Repeat: YES' : 'Message Repeat: NO'}
        </Text>
      </Button>
      <Button
        onPress={privacyAbout}
        style={[styles.button, { backgroundColor: '#1f2529' }]}
      >
        <Text style={styles.buttonText}>Privacy & About</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 10,
  },
  button: {
    display: 'flex',
    theme: {
      colors: { primary: '#f4efef' },
    },
    margin: 4,
    backgroundColor: 'rgb(24, 105, 127)',
    padding: 6,
    marginTop: 12,
    height: 54,
    width: 300,
    borderWidth: 1,
    borderColor: '#faf6f6',
  },
  timeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
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
  timeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 54,
    marginTop: 4,
  },
  timeTextContainer: {
    minWidth: 180,
    maxWidth: 180,
    alignItems: 'center',
  },
});
