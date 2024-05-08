import { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Title from './src/gui/Title';
import Input from './src/components/Input';
import Options from './src/components/Options';
import DisplayFlashMessage from './src/screens/DisplayFlashMessage';
import DisplayScrollingMessage from './src/screens/DisplayScrollingMessage';
import PrivacyAbout from './src/screens/PrivacyAbout';
import { PaperProvider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as Device from 'expo-device';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [messageToDisplay, setMessageToDisplay] = useState();
  const [showingFlash, setShowingFlash] = useState(false);
  const [showingScrolling, setShowingScrolling] = useState(false);
  const [userTime, setUserTime] = useState(0.75);
  const [scrollTime, setScrollTime] = useState('Slow');
  const [repeat, setRepeat] = useState(true);
  const [orientLandscape, setOrientLandscape] = useState(true);
  const [userStyles, setUserStyles] = useState(['black', 'yellow']);
  const [userHasTyped, setUserHasTyped] = useState('rgb(71, 12, 122, 0)');
  const [showingPrivacyAbout, setShowingPrivacyAbout] = useState(false);
  const [androidDetected, setAndroidDetected] = useState(false);
  const [displayType, setDisplayType] = useState('flash');

  const thisDevice = Device.deviceName.slice(0, 4);
  const thisPlatform = Platform.OS;

  if (thisPlatform == 'android' && !androidDetected) {
    // if Android, set default display time to 1.25
    // to offset problem with smoothness of Animation
    setUserTime(1.25);
    setAndroidDetected(true);
  }

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
    '#F535AA',
  ];
  const COLORS_TEXT = [
    'yellow',
    'black',
    'white',
    'white',
    'white',
    'black',
    'white',
  ];
  let userBgColor = userStyles[0];
  let userTxtColor = userStyles[1];
  let currentViewIsLandscape = false;
  let currentBg = userStyles[0];
  let screenWidth, screenHeight;
  const displayTimeAmounts = [
    0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5,
  ];
  const scrollingTimeAmounts = [
    'Very Slow',
    'Slower',
    'Slow',
    'Fast',
    'Faster',
    'Very Fast',
  ];

  // ________________________________ debug info
  // _________________________________get user screen dimensions
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;
  console.log(screenHeight);
  // _______________________________________________________

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

  async function startDisplay() {
    if (!enteredText) {
      return;
    }
    if (orientLandscape) {
      currentViewIsLandscape = true;
    }
    await changeScreenOrientation();
    if (displayType == 'flash') {
      setMessageToDisplay(splitMessageForFlash(enteredText));
      setShowingFlash(true);
    } else {
      setShowingScrolling(true);
    }
  }

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
    if (enteredText) {
      setUserHasTyped('green');
    } else {
      setUserHasTyped('#3a4c57');
      setShowingFlash(false);
    }
  };

  const clearPressHandler = () => {
    setEnteredText('');
  };

  const minusTimeHandler = () => {
    displayTimeHandler(0);
  };
  const plusTimeHandler = () => {
    displayTimeHandler(1);
  };

  const displayTimeHandler = (plusOrMinus = 1) => {
    displayTimeAmounts.forEach((amount, index) => {
      if (amount == userTime) {
        // check plus-case and act accordingly
        if (plusOrMinus == 1 && index !== displayTimeAmounts.length - 1) {
          setUserTime(displayTimeAmounts[index + 1]);
        }
        if (plusOrMinus == 0 && index !== 0) {
          setUserTime(displayTimeAmounts[index - 1]);
        }
        return;
      }
    });
  };

  const repeatHandler = () => {
    setRepeat(!repeat);
  };

  const returnTap = () => {
    setShowingPrivacyAbout(false);
    // default screen displays when returning from display screens
    // always return to portrait orientation
    setShowingFlash(false);
    setShowingScrolling(false);
    changeScreenOrientation();
  };

  const clearInput = () => {
    setEnteredText('');
    setUserHasTyped('#3a4c57');
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
    currentBg = userStyles[newStyle];
    setUserStyles([COLORS_BACKGROUND[newStyle], COLORS_TEXT[newStyle]]);
  };

  const splitMessageForFlash = (message) => {
    return message.split(' ');
  };

  const toggleUserOrientation = () => {
    if (thisDevice == 'iPad') {
      return;
    } else {
      setOrientLandscape(!orientLandscape);
    }
  };

  const toggleDisplayType = () => {
    displayType == 'flash'
      ? setDisplayType('scrolling')
      : setDisplayType('flash');
  };

  const privacyAbout = () => {
    setShowingPrivacyAbout(true);
  };

  return (
    (showingPrivacyAbout && <PrivacyAbout returnTap={returnTap} />) ||
    (showingScrolling && (
      <SafeAreaProvider>
        <DisplayScrollingMessage
          message={enteredText}
          returnTap={returnTap}
          height={screenHeight}
          width={screenWidth}
          whichWayUp={orientLandscape}
        />
      </SafeAreaProvider>
    )) ||
    (showingFlash && (
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    )) ||
    (!showingFlash && !showingPrivacyAbout && (
      <>
        <LinearGradient
          colors={['rgb(7, 49, 67)', 'rgb(12, 89, 122)', 'rgb(11, 31, 40)']}
          style={styles.background}
        />
        <PaperProvider>
          <StatusBar style='light' hidden={false} />
          <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
              <View>
                <View>
                  <Title thisDevice={thisDevice} />
                </View>
                <View>
                  <Input
                    enteredText={enteredText}
                    inputHandler={inputHandler}
                    clearPressHandler={clearPressHandler}
                  />
                </View>
                <View style={styles.optionsContainer}>
                  <Options
                    startDisplay={startDisplay}
                    minusTimeHandler={minusTimeHandler}
                    plusTimeHandler={plusTimeHandler}
                    repeatHandler={repeatHandler}
                    displayTime={userTime}
                    scrollingDisplayTime={scrollTime}
                    repeat={repeat}
                    orientIn={orientLandscape}
                    toggleUserOrientation={toggleUserOrientation}
                    toggleStyle={toggleStyle}
                    bg={userBgColor}
                    txt={userTxtColor}
                    userHasTyped={userHasTyped}
                    clearInput={clearInput}
                    privacyAbout={privacyAbout}
                    thisDevice={thisDevice}
                    displayType={displayType}
                    toggleDisplayType={toggleDisplayType}
                  />
                </View>
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </PaperProvider>
      </>
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'auto',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  textSmall: {
    color: 'orangered',
  },
  optionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'auto',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  textSmall: {
    color: 'orangered',
  },
  optionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
