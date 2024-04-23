import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function DisplayFlashMessage({
  height,
  width,
  userTime,
  returnTap,
  message,
  repeat,
  userBg,
  userTxt,
}) {
  //disable statusbar in message display
  const wordDuration = userTime;
  const [nextWord, setNextWord] = useState(0);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const FlashView = ({ children }) => {
    const animatedValue = useRef(new Animated.Value(0)).current; // initial value for word opacity

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
      <SafeAreaView>
        <Animated.View
          style={{
            opacity: animatedValue,
            // height: height,
            // width: width,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Animated.View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { backgroundColor: userBg }]}>
        <TouchableOpacity onPress={returnTap}>
          <FlashView>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={[styles.text, { color: userTxt, padding: 2 }]}
            >
              {message[nextWord]}
            </Text>
          </FlashView>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 780,
  },
});
