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

import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles, theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import ButtonAndAlreadyHave from '../components/ButtonAndAlreadyHave';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      // style={styles.background}
      className="flex-1 items-center  space-y-10"
      style={{backgroundColor: theme.background}}>
      <View style={{marginVertical: hp(10)}}>
        <Text style={{fontSize: hp(4)}} className="text-white font-bold">
          Let's get started
        </Text>
      </View>
      <View style={{marginBottom: hp(20)}}>
        <Image
          style={{width: hp(30), height: hp(30)}}
          source={require('../images/welcome.png')}
        />
      </View>
      <ButtonAndAlreadyHave
        navigation={navigation}
        buttonColor={theme.secondary}
        orAndIcons={false}
        loginTextColor={theme.secondary}
      />
    </View>
  );
};

export default WelcomeScreen;
