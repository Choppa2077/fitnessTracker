import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../colors/backgrounds';

import SetTimePart from './SetTimePart';

const SetTime = () => {
  return (
    <View
      style={{width: '85%', backgroundColor: theme.calendar}}
      className="  p-3 rounded-2xl  mb-8 py-6">
      <View className="items-center ">
        <Text className="text-white">Resting time</Text>
      </View>
      <View className="flex-row justify-evenly">
        <SetTimePart label={'Between Sets'} data={"00:00"} />
        <SetTimePart label={'After Exercise'}  data={"00:00"} />
      </View>
    </View>
  );
};

export default SetTime;
