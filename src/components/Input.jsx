import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React from 'react';

export default function Input({
  enteredText = 'Enter Your Message',
  inputHandler,
}) {
  return (
    <View style={styles.container}>
      <Searchbar
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
    backgroundColor: '#073044',
    color: 'white',
  },
});
