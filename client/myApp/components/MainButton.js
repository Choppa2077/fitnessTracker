import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import {useNavigation} from '@react-navigation/native';

const MainButton = ({
  absoluteBottom,
  route,
  navigation,
  width,
  rounded,
  fontLarge,
  signUpOrLogin,
  handleSignUp,
  closeModal,
}) => {
  //   const navigation = useNavigation();
  let whatWouldBeOnPress = !handleSignUp ? closeModal : handleSignUp;
  return (
    <View  className={'items-center ' + absoluteBottom}>
      <TouchableOpacity
        onPress={whatWouldBeOnPress}
        className={'items-center ' + rounded}
        style={{
          backgroundColor: theme.newMainColor,
          paddingHorizontal: hp(3),
          paddingVertical: hp(2),
          width: width,
        }}>
        <Text className="font-bold text-white" style={{fontSize: hp(2.5)}}>
          {signUpOrLogin}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
