import { StyleSheet, View } from 'react-native';
import { Searchbar, TextInput } from 'react-native-paper';
import React from 'react';

export default function Input({
  enteredText = 'Enter Your Message',
  inputHandler,
}) {
  return (
    <View style={styles.container}>
      {/* <Searchbar
        style={styles.input}
        value={enteredText}
        inputStyle={{
          fontSize: 22,
          textDecorationStyle: 'solid',
          color: 'white',
        }}
        mode='bar'
        elevation={5}
        onChangeText={inputHandler}
      /> */}
      <TextInput
        type='outlined'
        multiline={true}
        textColor='white'
        style={{
          width: '100%',
          backgroundColor: 'rgb(58, 15, 92)',
          height: '100',
          fontSize: 28,
          fontWeight: 'bold',
        }}
        label='Enter Message'
        value={enteredText}
        onChangeText={inputHandler}
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
