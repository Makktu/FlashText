import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

const TickerView = ({ height, width, messageLength, userTime, children }) => {
  const animatedValue = useRef(new Animated.Value(width + 950)).current; // initial value for position

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -messageLength,
      duration: userTime,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        fontSize: 40,
        transform: [{ translateX: animatedValue }],
        borderColor: 'red',
        borderWidth: 2,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default function DisplayTickertapeMessage({
  message,
  returnTap,
  width,
  height,
  length,
  userTime,
}) {
  console.log(`Height: ${height}, Width: ${width}`);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={returnTap}>
        <TickerView
          width={width}
          height={height}
          messageLength={length}
          userTime={userTime}
        >
          <Text style={styles.text}>{message}</Text>
        </TickerView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    // height: '100%',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    width: '100%',
    color: 'white',
  },
});
