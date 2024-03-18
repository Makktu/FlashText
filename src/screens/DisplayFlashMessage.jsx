import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

export default function DisplayFlashMessage({
  height,
  width,
  messageLength,
  userTime,
  children,
  returnTap,
  message,
  repeat,
  customFontSize,
}) {
  const FlashView = ({ height, width, messageLength, userTime, children }) => {
    const animatedValue = useRef(new Animated.Value(0)).current; // initial value for word opacity

    useEffect(() => {
      StatusBar.setHidden(true);
    }, []);

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        animationEnded();
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
          borderColor: '#aaff00',
          borderWidth: 2,
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
  console.log(message[0]);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={returnTap}>
        <FlashView>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
            {message[nextWord]}
          </Text>
        </FlashView>
      </TouchableOpacity>
    </>
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
    borderColor: 'red',
    borderWidth: 2,
  },
  text: {
    color: 'orangered',
  },
  greatContainer: {
    width: '100%',
  },
});
