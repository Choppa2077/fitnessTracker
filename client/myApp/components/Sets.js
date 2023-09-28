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

const Sets = () => {
  return (
    <View
      style={{marginRight: hp(1), backgroundColor: theme.secondary}}
      className=" flex-1 items-center justify-center rounded-xl">
      <Text className="text-white">20 x</Text>
      <Text className="text-white">2 kg</Text>
    </View>
  );
};

export default Sets;
