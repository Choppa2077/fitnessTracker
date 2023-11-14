import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';

const ButtonAndAlreadyHave = ({route, navigation, mainColor, signUpOrLogin, drawSignUp, drawLogin}) => {
  return (
    <View className="items-center absolute bottom-10" 
   // style={{marginTop: hp(60)}}
   
    >
      <View>
        <TouchableOpacity
        //  onPress={() => navigation.navigate(route)}
          // onPress={drawSignUp}
          className="rounded-3xl items-center"
          style={{
            backgroundColor: mainColor,
            paddingHorizontal: hp(3),
            paddingVertical: hp(2),
            width: hp(34),
          }}>
          <Text className="font-bold text-white" style={{fontSize: hp(3)}}>
            {signUpOrLogin}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center" style={{marginTop: hp(2)}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text className="text-white font-bold" style={{fontSize: hp(2)}}>
            Already have an account?
            <Text style={{color: mainColor}}> Log in</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View className="items-center">
        <View
          className="flex-row justify-between"
          style={{marginTop: hp(3), width: hp(20)}}>
          <View>
            <Image
              source={require('../images/googleSign.png')}
              style={{width: hp(5), height: hp(5)}}
            />
          </View>
          <View>
            <Image
              source={require('../images/twitter.png')}
              style={{width: hp(5), height: hp(5)}}
            />
          </View>
          <View>
            <Image
              source={require('../images/facebook.png')}
              style={{width: hp(5), height: hp(5)}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ButtonAndAlreadyHave;
