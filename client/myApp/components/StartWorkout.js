import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import Carousel from 'react-native-snap-carousel';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';

const StartWorkout = () => {
  return (
    <View className="flex-1  items-center  justify-center ">
      <View
        className="absolute  rounded-xl flex-1 justify-center"
        style={{
          width: hp(45),
          height: hp(5),
          backgroundColor: theme.primary,
          bottom: hp(1.5),
        }}>
        <View className="flex-row  items-center justify-center">
          <Text className="text-white" style={{fontSize: hp(2.5)}}>
            Start workout
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StartWorkout;
