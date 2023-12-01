// import {View, Text, Image} from 'react-native';
// import React, {useEffect} from 'react';
// import {styles} from '../colors/backgrounds';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
// import {useNavigation} from '@react-navigation/native';

// const WelcomeScreen = () => {
//   const ring1padding = useSharedValue(0);
//   const ring2padding = useSharedValue(0);
//   const navigation = useNavigation();

//   useEffect(() => {
//     ring1padding.value = 0;
//     ring2padding.value = 0;
//     setTimeout(
//       () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
//       100,
//     );
//     setTimeout(
//       () => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))),
//       300,
//     );
//     setTimeout(() => navigation.navigate('Home'), 1000);
//   });
//   return (
//     <View
//       // style={styles.background}
//       className="flex-1 items-center justify-center space-y-10 bg-amber-500">
//       <Animated.View
//         className="bg-white/20 rounded-full"
//         style={{padding: ring2padding}}>
//         <Animated.View
//           className="bg-white/20 rounded-full"
//           style={{padding: ring1padding}}>
//           <Image className source={require('../images/white.png')} />
//         </Animated.View>
//       </Animated.View>
//     </View>
//   );
// };

// export default WelcomeScreen;

import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles, theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import ButtonAndAlreadyHave from '../components/ButtonAndAlreadyHave';
import BackgroundAndCenterContent from '../components/BackgroundAndCenterContent';
import EditInputs from '../components/EditInputs';
import MainButton from '../components/MainButton';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [showInputs, setShowInputs] = useState(false);
  const [showLoginInputs, setShowLoginInputs] = useState(false);
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const drawSignUp = () => {
    setShowInputs(true);
  };
  const drawLogin = () => {
    setShowLoginInputs(true);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <BackgroundAndCenterContent
        source={require('../images/newWelcome.jpg')}
      />
      <View className="absolute top-36" style={{marginBottom: hp(10)}}>
        <Text style={{fontSize: hp(5)}} className="text-white font-bold">
          {showInputs ? 'Sign Up' : 'Get started'}
        </Text>
      </View>

      {showInputs ? (
        <View className="flex-1 justify-center">
          {showLoginInputs ? (
            <EditInputs
              textParam={username}
              setInput={setUsername}
              placeholder={'Username'}
            />
          ) : (
            <Text></Text>
          )}
          <EditInputs
            textParam={emailAddress}
            setInput={setEmailAddress}
            placeholder={'Email Address'}
          />
          <EditInputs
            textParam={password}
            setInput={setPassword}
            placeholder={'Password'}
          />
        </View>
      ) : (
        <View className="absolute top-80" style={{width: hp(41)}}>
          <Text
            className="text-white "
            style={{
              fontSize: 24,
              textAlign: 'center',
              color: 'white',
              letterSpacing: 1,
              lineHeight: 25,
            }}>
            Remember, the only bad workout is the one that didn't happen. Keep
            pushing yourself, and the results will follow.
          </Text>
        </View>
      )}
      <MainButton route={"Register"} navigation={navigation} signUpOrLogin={'Get Started'} />
      <ButtonAndAlreadyHave
        // route={'Register'}
        // navigation={navigation}
        mainColor={theme.newMainColor}
        signUpOrLogin={'Get Started'}
        drawSignUp={drawSignUp}
        drawLogin={drawLogin}
        showInputs={showInputs}
      />
    </View>
  );
};

export default WelcomeScreen;
