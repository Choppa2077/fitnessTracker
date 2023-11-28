import {View, Text} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UserParam = ({keyInfo, valueInfo}) => {
  return (
    <View style={{width: '80%'}} className="flex-row justify-between">
      <Text style={{fontSize: hp(2)}} className="text-white mb-4 font-bold">
        {keyInfo}
      </Text>
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
