import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GoBackButton = ({navigation}) => {
  return (
    <View
      className="absolute z-30 left-0 "
      style={{paddingHorizontal: hp(2), paddingTop: hp(2)}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={theme.secondary}
        className="rounded-xl p-1 ">
        <Icons.ChevronLeftIcon size={hp(4)} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;
