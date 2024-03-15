import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function DisplayTickertapeMessage({ message }) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
