import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect, useRef, Component } from 'react';

export default function DisplayFlashMessage({
  height,
  width,
  messageLength,
  userTime,
  children,
  returnTap,
  message,
  repeat,
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
          fontSize: 40,
          opacity: animatedValue,
          borderColor: 'red',
          borderWidth: 2,
        }}
      >
        {children}
      </Animated.View>
    );
  };

  const [nextWord, setNextWord] = useState(0);
  console.log(message[0]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={returnTap}>
        <FlashView width={width} height={height} userTime={userTime}>
          <Text style={styles.text}>{message[nextWord]}</Text>
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
  },
  text: {
    fontSize: 80,
    color: 'white',
  },
});
