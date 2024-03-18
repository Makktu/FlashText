import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import React, { Component, useEffect, useRef } from 'react';

const TickerView = ({ height, width, messageLength, userTime, children }) => {
  const animatedValue = useRef(new Animated.Value(0)).current; // initial value for position

  useEffect(() => {
    animatedValue.addListener((value) => {
      console.log(value);
    });
  }, []);

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
          style={{ position: 'absolute', right: { width } * 1000 }}
          width={width}
          height={height}
          messageLength={length}
          userTime={userTime}
        >
          <Text numberOfLines={1} style={styles.text}>
            {message}
          </Text>
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
  // tickerview: {
  //   position: 'absolute',
  //   right: width + 10,
  // },
});
