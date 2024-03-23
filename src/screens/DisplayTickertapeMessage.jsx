import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

const TickerView = ({ height, width, messageLength, userTime, children }) => {
  const animatedValue = useRef(new Animated.Value(width + 10)).current; // initial value for position

  // useEffect(() => {
  //   animatedValue.addListener((value) => {
  //     console.log(value);
  //   });
  // }, []);

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -(messageLength + width),
      duration: userTime,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: animatedValue }],
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
    <>
      <TouchableOpacity style={styles.container} onPress={returnTap}>
        <TickerView
          style={{ height: '100%', width: '100%' }}
          width={width}
          height={height}
          messageLength={length}
          userTime={userTime}
        >
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.text}
          >
            {message}
          </Text>
        </TickerView>
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
    fontSize: 50,
    width: '100%',
    color: 'white',
  },
});
