import { StyleSheet, Text, View } from 'react-native';
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
      {/* _________________ */}
      {/* GO BUTTON */}
      <Button
        style={(styles.button, { backgroundColor: userHasTyped })}
        onPress={startDisplay}
      >
        <Text style={styles.buttonText}>
          {userHasTyped == 'green' ? 'GO!' : 'Type a message!'}
        </Text>
      </Button>
      {/* _________________ */}
      {/* COLOR PICKER BUTTON */}
      <Button
        onPress={toggleStyle}
        style={[styles.button, { backgroundColor: bg }]}
      >
        <Text style={{ color: txt, fontWeight: 'bold', fontSize: 20 }}>
          {showingTxtColor} on {showingBgColor}
        </Text>
      </Button>
      {/* _________________ */}
      {/* TIME PICKER BUTTON */}
      <View style={styles.timeBtnContainer}>
        <Button onPress={minusTimeHandler} style={styles.timeButton}>
          <AntDesign name='minussquare' size={42} color='rgb(247, 243, 250)' />
        </Button>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            {displayTime} {displayTime == 1 ? 'second' : 'seconds'}
          </Text>
        </View>
        <Button onPress={plusTimeHandler} style={styles.timeButton}>
          <AntDesign name='plussquare' size={42} color='#f8f1f1' />
        </Button>
      </View>
      {/* _________________ */}
      {/* OTHER */}
      <Button onPress={clearInput} style={styles.button}>
        <Text style={styles.buttonText}>Clear Input</Text>
      </Button>
      <Button onPress={toggleUserOrientation} style={styles.button}>
        <Text style={styles.buttonText}>
          Display: {orientIn ? 'LANDSCAPE' : 'PORTRAIT'}
        </Text>
      </Button>
      <Button onPress={repeatHandler} color={'black'} style={styles.button}>
        <Text style={styles.buttonText}>
          {repeat ? 'Message Repeat: YES' : 'Message Repeat: NO'}
        </Text>
      </Button>
      <Button onPress={privacyAbout} style={styles.button}>
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
    // backgroundColor: '#rgb(44, 0, 81)',
    backgroundColor: '#a4118e',
    padding: 6,
    marginTop: 12,
    height: 52,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButton: {
    height: 60,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    height: 64,
    // borderRadius: 240,
    // backgroundColor: '#a4118e',
  },
  timeText: {
    // alignItems: 'center',
    // maxWidth: 250,
    // minWidth: 250,
    // marginHorizontal: 12,
    // justifyContent: 'center',
  },
});
