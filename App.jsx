import { useState } from 'react';
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
  const [userTime, setUserTime] = useState(0.75);
  const [tickerTime, setTickerTime] = useState('SLOW');
  const [repeat, setRepeat] = useState(true);
  const [customFontSize, setCustomFontSize] = useState(130);
  const [orientationIsPortrait, setOrientationIsPortrait] = useState(true);

  let screenWidth, screenHeight;
  const displayTimeAmounts = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  let tickerSpeeds = ['Very Slow', 'Slow', 'Fast', 'Very Fast'];

  async function changeScreenOrientation() {
    if (orientationIsPortrait) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else if (!orientationIsPortrait) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }
  const toggleOrientation = () => {
    setOrientationIsPortrait(!orientationIsPortrait);
    changeScreenOrientation();
  };

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const clearPressHandler = () => {
    setEnteredText('');
  };

  const displayTimeHandler = () => {
    // displayTime will cycle through the array
    if (displayTime == 'Word Flash') {
      displayTimeAmounts.forEach((amount, index) => {
        if (amount == userTime) {
          if (index == displayTimeAmounts.length - 1) {
            setUserTime(displayTimeAmounts[0]);
          } else {
            setUserTime(displayTimeAmounts[index + 1]);
          }
        }
      });
    } else {
      // ! setTickerTime(tickerSpeeds[???])
    }
  };

  const repeatHandler = () => {
    setRepeat(!repeat);
  };

  const returnTap = () => {
    // default screen displays when returning from display screens
    setShowingFlash(false);
    setShowingTickertape(false);
    // and return to portrait orientation
    toggleOrientation();
    // and restore the StatusBar
    StatusBar.setHidden(false);
  };

  const startDisplay = () => {
    if (!enteredText) {
      console.log('nowt there');
      return;
    }
    // ________________________________ debug info
    // _________________________________get user screen dimensions
    screenWidth = Dimensions.get('window').width;
    screenHeight = Dimensions.get('window').height;
    console.log(`User Screen: ${screenWidth} WIDTH / ${screenHeight} HEIGHT`);
    // _______________________________________________________________

    if (displayMode == 'Word Flash') {
      setMessageToDisplay(splitMessageForFlash(enteredText));
      setShowingTickertape(false);
      setShowingFlash(true);
    } else {
      setMessageToDisplay(enteredText);
      setShowingFlash(false);
      setShowingTickertape(true);
    }
    toggleOrientation();
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
  };

  const toggleUserOrientation = () => {
    console.log('workingggg');
  };

  return (
    (showingFlash && (
      <DisplayFlashMessage
        message={messageToDisplay}
        returnTap={returnTap}
        repeat={repeat}
        customFontSize={customFontSize}
        userTime={userTime * 1000}
        width={screenWidth}
        height={screenHeight}
      />
    )) ||
    (showingTickertape && (
      <DisplayTickertapeMessage
        message={messageToDisplay}
        returnTap={returnTap}
        width={screenWidth}
        height={screenHeight}
        length={messageToDisplay.length}
        userTime={userTime * 1000}
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
              tickerPace={tickerTime}
              typePressHandler={typePressHandler}
              displayMode={displayMode}
              displayTimeHandler={displayTimeHandler}
              repeatHandler={repeatHandler}
              displayTime={userTime}
              repeat={repeat}
              orientIn={orientationIsPortrait}
              toggleUserOrientation={toggleUserOrientation}
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
