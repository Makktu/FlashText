import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Title from './src/gui/Title';
import Input from './src/components/Input';
import Options from './src/components/Options';
import DisplayFlashMessage from './src/screens/DisplayFlashMessage';
import DisplayTickertapeMessage from './src/screens/DisplayTickertapeMessage';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [displayMode, setDisplayMode] = useState('Word Flash');
  const [messageToDisplay, setMessageToDisplay] = useState();
  const [showingFlash, setShowingFlash] = useState(false);
  const [showingTickertape, setShowingTickertape] = useState(false);

  // get user screen dimensions

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const clearPressHandler = () => {
    setEnteredText('');
  };

  const returnTap = () => {
    // make sure the default screen displays
    // when returning from either of the display screens
    setShowingFlash(false);
    setShowingTickertape(false);
  };

  const startDisplay = () => {
    // return if nothing entered
    if (!enteredText) {
      console.log('nowt there');
      return;
    }
    console.log('GO!', displayMode);
    if (displayMode == 'Word Flash') {
      setMessageToDisplay(splitMessageForFlash(enteredText));
      console.log(messageToDisplay, typeof messageToDisplay);
      setShowingTickertape(false);
      setShowingFlash(true);
    } else {
      setMessageToDisplay(enteredText);
      console.log(messageToDisplay, typeof messageToDisplay);
      setShowingFlash(false);
      setShowingTickertape(true);
    }
    // if mode is set to Flash, need to break it up into words
    // otherwise, just proceed with scrolling tickertape displa
  };

  const splitMessageForFlash = (message) => {
    return message.split(' ');
  };

  const typePressHandler = () => {
    displayMode == 'Word Flash'
      ? setDisplayMode('Scrolling Tickertape')
      : setDisplayMode('Word Flash');
    console.log('Display Mode set to', displayMode);
  };

  return (
    (showingFlash && (
      <DisplayFlashMessage message={messageToDisplay} returnTap={returnTap} />
    )) ||
    (showingTickertape && (
      <DisplayTickertapeMessage
        message={messageToDisplay}
        returnTap={returnTap}
        width={screenWidth}
        height={screenHeight}
        length={messageToDisplay.length}
      />
    )) ||
    (!showingFlash && !showingTickertape && (
      <>
        <StatusBar style='light' />

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title />
          </View>
          <View style={styles.inputContainer}>
            <Input
              enteredText={enteredText}
              inputHandler={inputHandler}
              clearPressHandler={clearPressHandler}
            />
          </View>
          <View style={styles.optionsContainer}>
            <Options
              startDisplay={startDisplay}
              typePressHandler={typePressHandler}
              displayMode={displayMode}
            />
          </View>
        </View>
      </>
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSmall: {
    color: 'orangered',
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    flex: 1,
  },
});
