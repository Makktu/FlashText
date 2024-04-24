import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

export default function Input({
  enteredText = 'Enter Your Message',
  inputHandler,
  thisWidth,
}) {
  console.log(thisWidth);
  return (
    <View style={styles.container}>
      <TextInput
        multiline={false}
        textColor='white'
        style={{
          width: '100%',
          backgroundColor: 'rgb(36, 6, 59)',
          height: 70,
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'auto',
        }}
        label='Enter Message Here!'
        value={enteredText}
        onChangeText={inputHandler}
        mode='outlined'
        placeholder='ENTER MESSAGE'
        selectionColor='white'
        activeOutlineColor='white'
        dense={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 4,
  },
  input: {
    height: 100,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'rgb(44, 0, 81)',
    color: 'white',
  },
});
