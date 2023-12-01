import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';

const InfoWorkout = () => {
  return (
    <View
      className="rounded-xl py-4 "
      style={{
        paddingHorizontal: hp(3),
        marginBottom: hp(5),
        backgroundColor: theme.calendar,
        width: '85%',
        height: hp(10),
      }}>
      <View className="flex-row justify-between " style={{marginTop: hp(2)}}>
        <View className="flex-row items-center">
          <View>
            <Icons.ClockIcon size={hp(4)} color={'white'} />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            {/* <Text className=" text-gray-400">Duration</Text> */}
            <Text className="text-white font-bold" style={{fontSize: hp(1.3)}}>
              20-30 min
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <View style={{marginLeft: hp(0.5)}}>
            <Icons.FireIcon size={hp(4)} color={'white'} />
          </View>
          <View>
            {/* <Text className=" text-gray-400">Calories</Text> */}
            <Text className="text-white font-bold">155 kcal</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <View>
            <Image
              source={require('../images/completeDum.png')}
              style={{width: hp(4), height: hp(4)}}
            />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            {/* <Text className=" text-gray-400">Weight</Text> */}
            <Text className="text-white font-bold">200kg</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoWorkout;
