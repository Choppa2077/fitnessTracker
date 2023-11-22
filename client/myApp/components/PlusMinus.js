import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';
import HorizontalLine from './HorizontalLine';
import PlusMinusPart from './PlusMinusPart';

const PlusMinus = ({
  toggleCheckBox,
  addRow,
  removeRow,
  minusRepsHandler,
  plusRepsHandler,
  minusLoadHandler,
  plusLoadHandler,
  setsArray,
}) => {
  const rows = setsArray.map((row, index) => {
    return (
      <View key={index} className="flex-row justify-between mb-6">
        <PlusMinusPart
          label={'Reps'}
          data={row.reps}
          setPlus={() => plusRepsHandler(index)}
          setMinus={() => minusRepsHandler(index)}
        />
        <PlusMinusPart
          label={'Load'}
          data={row.load}
          setPlus={() => plusLoadHandler(index)}
          setMinus={() => minusLoadHandler(index)}
          toggleCheckBox={toggleCheckBox}
        />
      </View>
    );
  });
  return (
    <View
      style={{width: '85%', backgroundColor: theme.calendar}}
      className=" p-3 rounded-2xl   ">
      <View className="items-center ">
        <Text className="text-white">Sets</Text>
        <View className="flex-row items-center">
          <TouchableOpacity onPress={removeRow}>
            <Icons.MinusIcon color={theme.calendarItems} size={hp(4)} />
          </TouchableOpacity>
          <Text className="text-white mx-2">{setsArray.length}</Text>
          <TouchableOpacity onPress={addRow}>
            <Icons.PlusIcon color={theme.calendarItems} size={hp(4)} />
          </TouchableOpacity>
        </View>
      </View>
      {rows}
    </View>
  );
};

export default PlusMinus;
