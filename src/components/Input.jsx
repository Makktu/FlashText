import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

export default function Input({
  enteredText = 'Enter Your Message',
  inputHandler,
  thisWidth,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        // multiline={true}
        textColor='white'
        style={{
          width: '100%',
          backgroundColor: 'rgb(18, 18, 19)',
          fontSize: 26,
          lineHeight: 29,
          fontWeight: 'bold',
          textAlign: 'auto',
          height: 80,
        }}
        label='Enter Message Here!'
        value={enteredText}
        onChangeText={inputHandler}
        mode='outlined'
        placeholder='ENTER MESSAGE'
        selectionColor='white'
        activeOutlineColor='#1606eb'
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
    // justifyContent: 'center',
    // width: '100%',
    marginTop: 10,
    marginHorizontal: 4,
  },
  // input: {
  //   height: 100,
  //   width: 300,
  //   borderRadius: 20,
  //   backgroundColor: 'rgb(44, 0, 81)',
  //   color: 'white',
  // },
});
