import React, { useState } from 'react';
import { Audio } from 'expo-av';

export default function Beep() {
  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./../../assets/sfx/flashbeep.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  return (
    <View>
      <Text>Beep</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
