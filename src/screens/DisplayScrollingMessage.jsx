import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
  height,
  width,
  whichWayUp,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const TickerView = ({ children, width, height, isLandScape }) => {
  let startingPoint;
  if (isLandScape) {
    startingPoint = height - 200;
  } else {
    startingPoint = width - 100;
  }
  const animatedValue = useRef(new Animated.Value(startingPoint)).current; // initial value for position

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -startingPoint + -startingPoint / 2, // value hardcoded for now - to change dynamically based on user input
      duration: 5000, // back to userTime when bugs worked out
      useNativeDriver: true,
    }).start(({ finished }) => {
      console.log('ended');
    });
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

export default function DisplayScrollingMessage({
  message,
  returnTap,
  width,
  height,
  whichWayUp,
  length,
  userTime,
}) {
  // console.log(`Height: ${height}, Width: ${width}`);
  console.log(message, height, width, whichWayUp);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={returnTap}>
        <TickerView
          // style={{ height: '100%', width: '100%' }}
          width={width}
          height={height}
          messageLength={length}
          userTime={userTime}
          isLandScape={whichWayUp}
        >
          <Text
            style={styles.text}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
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
  },
  text: {
    fontSize: 1000,
    height: 300,
    color: 'orangered',
  },
});
