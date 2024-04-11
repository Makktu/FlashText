import { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Title from './src/gui/Title';
import Input from './src/components/Input';
import Options from './src/components/Options';
import DisplayFlashMessage from './src/screens/DisplayFlashMessage';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [displayMode, setDisplayMode] = useState('Word Flash');
  const [messageToDisplay, setMessageToDisplay] = useState();
  const [showingFlash, setShowingFlash] = useState(false);
  const [userTime, setUserTime] = useState(0.75);
  const [repeat, setRepeat] = useState(true);
  const [orientLandscape, setOrientLandscape] = useState(true);
  const [styles, setStyles] = useState(['black', 'yellow']);

  useEffect(() => {
    currentViewIsLandscape = false;
    changeScreenOrientation();
  }, []);

  const COLORS_BACKGROUND = [
    'black',
    'yellow',
    'green',
    'red',
    'blue',
    'white',
  ];
  const COLORS_TEXT = ['yellow', 'black', 'white', 'white', 'white', 'black'];
  let userBgColor = styles[0];
  let userTxtColor = styles[1];
  let currentViewIsLandscape = false;
  let currentBg = styles[0];
  let screenWidth, screenHeight;
  const displayTimeAmounts = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  async function changeScreenOrientation() {
    if (orientLandscape && currentViewIsLandscape) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const clearPressHandler = () => {
    setEnteredText('');
  };

  const displayTimeHandler = () => {
    // displayTime will cycle through the array
    if (displayMode == 'Word Flash') {
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
    // always return to portrait orientation if on landscape
    changeScreenOrientation();
    // and restore the StatusBar
    StatusBar.setHidden(false);
  };

  const toggleColors = () => {
    console.log('Color toggler...');
  };

  const toggleStyle = () => {
    let newStyle;
    for (let a = 0; a < COLORS_BACKGROUND.length; a++) {
      if (COLORS_BACKGROUND[a] == currentBg) {
        newStyle = a + 1;
        if (newStyle == COLORS_BACKGROUND.length) {
          newStyle = 0;
        }
      }
    }
    currentBg = styles[newStyle];
    setStyles([COLORS_BACKGROUND[newStyle], COLORS_TEXT[newStyle]]);
  };

  const startDisplay = () => {
    if (!enteredText) {
      console.log('nowt there');
      return;
    }
    // ________________________________ debug info
    // _________________________________get user screen dimensions
    // screenWidth = Dimensions.get('window').width;
    // screenHeight = Dimensions.get('window').height;
    // console.log(`User Screen: ${screenWidth} WIDTH / ${screenHeight} HEIGHT`);
    setMessageToDisplay(splitMessageForFlash(enteredText));
    setShowingFlash(true);
    if (orientLandscape) {
      currentViewIsLandscape = true;
    }
    changeScreenOrientation();
  };

  const splitMessageForFlash = (message) => {
    return message.split(' ');
  };

  const toggleUserOrientation = () => {
    setOrientLandscape(!orientLandscape);
  };

  return (
    (showingFlash && (
      <DisplayFlashMessage
        message={messageToDisplay}
        returnTap={returnTap}
        repeat={repeat}
        userTime={userTime * 1000}
        width={screenWidth}
        height={screenHeight}
        userBg={userBgColor}
        userTxt={userTxtColor}
      />
    )) ||
    (!showingFlash && (
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
              displayTimeHandler={displayTimeHandler}
              repeatHandler={repeatHandler}
              displayTime={userTime}
              repeat={repeat}
              orientIn={orientLandscape}
              toggleUserOrientation={toggleUserOrientation}
              toggleColors={toggleColors}
              toggleStyle={toggleStyle}
              bg={userBgColor}
              txt={userTxtColor}
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
