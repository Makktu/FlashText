import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
// import {
//   responsiveScreenHeight,
//   responsiveScreenWidth,
//   responsiveScreenFontSize,
// } from 'react-native-responsive-dimensions';

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
  //disable statusbar in message display
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const wordDuration = userTime;

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

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={returnTap}>
        <FlashView>
          <Text style={{ color: 'orangered', fontSize: 150 }}>
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
    // height: '100%',
    // width: '100%',
    // borderColor: '#09b9f4',
    // borderWidth: 2,
    // fontSize: responsiveScreenFontSize(30),
  },
});
