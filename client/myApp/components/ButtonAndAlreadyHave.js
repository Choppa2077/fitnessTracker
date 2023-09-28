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

const ButtonAndAlreadyHave = ({
  navigation,
  buttonColor,
  orAndIcons,
  loginTextColor,
  marg,
}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          className="rounded-xl items-center"
          style={{
            backgroundColor: buttonColor,
            paddingHorizontal: hp(2),
            paddingVertical: hp(1),
          }}>
          <Text className="font-bold text-white" style={{fontSize: hp(3)}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {orAndIcons ? (
        <View>
          <View style={{marginVertical: hp(2)}} className="items-center">
            <Text style={{fontSize: hp(3)}} className="text-white font-bold">
              Or
            </Text>
          </View>

          <View
            className="flex-row justify-between "
            style={{marginBottom: hp(4)}}>
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
      ) : (
        <Text></Text>
      )}

      <View className="items-center" style={{}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text className="text-white font-bold" style={{fontSize: hp(2)}}>
            Already have an account?
            <Text style={{color: loginTextColor}}> Log in</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ButtonAndAlreadyHave;
