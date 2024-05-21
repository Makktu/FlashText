import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Title from '../gui/Title';

export default function PrivacyAbout({ returnTap }) {
  return (
    <TouchableOpacity style={styles.container} onPress={returnTap}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={styles.privacyAndAbout}>
            <View style={styles.titleContainer}>
              <Title />
            </View>
            <Text style={styles.heading}>Privacy</Text>
            <Text style={styles.text}>
              Your messages are not sent anywhere.{'\n'}They do not leave your
              device and are not seen by any party other than those you show
              them to.
            </Text>
            <Text style={styles.heading}>About FlashText</Text>
            <Text style={styles.text}>
              You own the app forever.{'\n'}No registration, no logging in, no
              nags to upgrade.{'\n'}
            </Text>
            <Text style={styles.text}>Developer: John McNamara</Text>
            <Text style={styles.heading}>
              Tap anywhere to close this screen.
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: 'rgb(61, 32, 2)',
  },
  privacyAndAbout: {
    // marginTop: 60,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    color: 'white',
  },
  heading: {
    fontSize: 22,
    marginVertical: 4,
    marginHorizontal: 16,
    color: 'yellow',
  },
  titleContainer: {
    // margin: 38,
  },
});

const androidStyle = StyleSheet.create({
  privacyAndAbout: {
    marginBottom: 100,
  },
});
