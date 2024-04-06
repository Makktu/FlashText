import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function Beep(playTheBeep) {
  const [sound, setSound] = useState();
  if (playTheBeep) playSound();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./../../assets/sfx/flashbeep.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound', message[nextWord]);
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <View></View>;
}

const styles = StyleSheet.create({});
