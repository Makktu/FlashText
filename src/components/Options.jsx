import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-paper';

import React, { useState } from 'react';

export default function Options({
  startDisplay,
  typePressHandler,
  displayMode,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.goButtonContainer}>
        <Button mode='contained' style={styles.goButton} onPress={startDisplay}>
          GO!
        </Button>
      </View>
      <Button mode='contained' onPress={typePressHandler} style={styles.button}>
        Display Mode: {displayMode}
      </Button>
      <Button style={styles.button}>Options2</Button>
      <Button color={'black'} style={styles.button}>
        Options3
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
      colors: { primary: 'white' },
    },
    margin: 10,
    backgroundColor: '#260707',
    fontSize: 24,
    padding: 6,
    height: 60,
    width: 300,
  },
  goButtonContainer: {
    marginBottom: 20,
  },
  goButton: {
    height: 90,
  },
});
