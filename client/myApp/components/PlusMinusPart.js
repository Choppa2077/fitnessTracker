import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';
import HorizontalLine from './HorizontalLine';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PlusMinusPart = ({label, data, setPlus, setMinus, toggleCheckBox}) => {
  return (
    <View className="flex-row items-center ">
      <TouchableOpacity onPress={setMinus}>
        <Icons.MinusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
      <View className="items-center">
        <Text className="text-white">{label}</Text>
        <Text className="text-white">{data}</Text>
        <HorizontalLine height={3} />
      </View>
      <TouchableOpacity onPress={setPlus}>
        <Icons.PlusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
    </View>
  );
};

export default PlusMinusPart;
