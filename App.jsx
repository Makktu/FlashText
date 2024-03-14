import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/gui/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title />
      </View>
      <Text style={styles.textSmall}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSmall: {
    color: 'orangered',
  },
  titleContainer: {
    position: 'absolute',
    top: 40,
    flex: 1,
  },
});
