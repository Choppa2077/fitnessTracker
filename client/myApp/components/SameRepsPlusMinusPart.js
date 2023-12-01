import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';

const SameRepsPlusMinusPart = ({label, data, setMinus, setPlus}) => {
  return (
    <View className="flex items-center ">
      <TouchableOpacity onPress={setPlus}>
        <Icons.PlusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
      <View className="items-center">
        <Text className="text-white">{label}</Text>
        <Text className="text-white">{data}</Text>
        <HorizontalLine height={3} />
      </View>
      <TouchableOpacity onPress={setMinus}>
        <Icons.MinusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
    </View>
  );
};

export default SameRepsPlusMinusPart;
