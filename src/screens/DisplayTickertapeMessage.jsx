import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

const TickerView = ({ height, width, messageLength, children }) => {
  const animatedValue = useRef(
    new Animated.Value(messageLength + 1500)
  ).current; // initial value for position

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -(messageLength + 1300),
      duration: 7000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{ fontSize: 40, transform: [{ translateX: animatedValue }] }}
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
}) {
  const moveText = () => {
    console.log('here');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={returnTap}>
        <TickerView width={width} height={height} messageLength={length}>
          <Text style={styles.text}>{message}</Text>
        </TickerView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgreen',
    flex: 1,
    // height: '100%',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    width: '100%',
    // transform: [{ translateY: 50 }],
  },
  // touchableArea: {
  //   flex: 1,
  //   // height: '100%',
  //   // width: '100%',
  // },
});
