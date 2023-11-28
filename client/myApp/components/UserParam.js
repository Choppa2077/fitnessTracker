import {View, Text} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';

const UserParam = ({keyInfo, valueInfo}) => {
  return (
    <View style={{width: '80%'}} className="flex-row justify-between">
      <Text className="text-white mb-4 font-bold">{keyInfo}</Text>
      <View style={{width: '80%'}}>
        <View className=" items-end">
          <Text className="text-white">{valueInfo}</Text>
          <HorizontalLine className=" items-end" height={2} width={'80%'} />
        </View>
      </View>
    </View>
  );
};

export default UserParam;
