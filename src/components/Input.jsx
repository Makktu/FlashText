import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

export default function Input({
  enteredText = 'Enter Your Message',
  inputHandler,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        textColor='white'
        style={styles.inputText}
        value={enteredText}
        onChangeText={inputHandler}
        mode='outlined'
        placeholder='Enter text here...'
        selectionColor='white'
        activeOutlineColor='#f4f7f8'
        dense={false}
        keyboardAppearance='default'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 4,
  },
  inputText: {
    includeFontPadding: false,
    paddingVertical: 12,
    margin: 0,
    width: '100%',
    backgroundColor: 'rgb(5, 42, 53)',
    fontSize: 26,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    // textAlignVertical: 'center',
    // height: 80,
  },
});
