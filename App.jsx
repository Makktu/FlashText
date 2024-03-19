import { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
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
  const [userTime, setUserTime] = useState(10000);
  const [repeat, setRepeat] = useState(false);
  const [customFontSize, setCustomFontSize] = useState(20);

  // get user screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    lockOrientation();
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.OrientationLock.PORTRAIT;
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const clearPressHandler = () => {
    setEnteredText('');
  };

  const displayTimeHandler = () => {
    console.log('display time handler');
  };

  const repeatHandler = () => {
    setRepeat(!repeat);
  };

  const returnTap = () => {
    // make sure the default screen displays
    // when returning from either of the display screens
    setShowingFlash(false);
    setShowingTickertape(false);
    // and restore the StatusBar
    StatusBar.setHidden(false);
  };

  const startDisplay = () => {
    // return if nothing entered
    if (!enteredText) {
      console.log('nowt there');
      return;
    }
    // let fontCalc = screenWidth / 3;
    // fontCalc > 100 ? (fontCalc = 100) : null;
    setCustomFontSize(100);
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
      <DisplayFlashMessage
        message={messageToDisplay}
        returnTap={returnTap}
        repeat={repeat}
        customFontSize={customFontSize}
      />
    )) ||
    (showingTickertape && (
      <DisplayTickertapeMessage
        message={messageToDisplay}
        returnTap={returnTap}
        width={screenWidth}
        height={screenHeight}
        length={messageToDisplay.length}
        userTime={userTime}
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
              displayTimeHandler={displayTimeHandler}
              repeatHandler={repeatHandler}
              displayTime={userTime / 1000}
              repeat={repeat}
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
    // justifyContent: 'center',
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
