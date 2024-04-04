import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

export default function DisplayFlashMessage({
  height,
  width,
  userTime,
  returnTap,
  message,
  repeat,
  soundsOn,
}) {
  //disable statusbar in message display
  useEffect(() => {
    StatusBar.setHidden(true);
    if (soundsOn > 0) playSound();
  }, []);

  const wordDuration = userTime;
  let playNoMoreSounds = false;

  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./../../assets/sfx/flashbeep.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }

  const FlashView = ({ children }) => {
    const animatedValue = useRef(new Animated.Value(0)).current; // initial value for word opacity
    const customFontSize = width / 15;

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: wordDuration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        animationEnded();
        if (finished && soundsOn == 2) playSound();
      });
    }, [animatedValue]);

    const animationEnded = () => {
      if (nextWord < message.length - 1) {
        setNextWord(nextWord + 1);
      } else {
        if (repeat) {
          setNextWord(0);
        }
      }
    };

    return (
      <Animated.View
        style={{
          opacity: animatedValue,
          // borderColor: '#aaff00',
          // borderWidth: 2,
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Animated.View>
    );
  };

  const [nextWord, setNextWord] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={returnTap}>
        <FlashView>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={[styles.text]}
          >
            {message[nextWord]}
          </Text>
        </FlashView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  text: {
    color: 'orangered',
    // height: '100%',
    // width: '100%',
    // borderColor: '#09b9f4',
    // borderWidth: 2,
    fontSize: 280,
  },
});
