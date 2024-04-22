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
        type='outlined'
        multiline={false}
        textColor='white'
        style={{
          width: thisWidth,
          backgroundColor: 'rgb(58, 15, 92)',
          height: 100,
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'auto',
        }}
        label='Enter Message'
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
    height: 200,
    width: 300,
    borderRadius: 20,
    backgroundColor: 'rgb(44, 0, 81)',
    color: 'white',
  },
});
