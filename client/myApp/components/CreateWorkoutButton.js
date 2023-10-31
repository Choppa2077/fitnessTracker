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
import {useNavigation} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';

const CreateWorkoutButton = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 items-end justify-center"
      style={{height: hp(10), marginTop: hp(2)}}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('EditWorkout', {id: 5})}>
        <Icons.PlusCircleIcon size={hp(7)} color={theme.secondary} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateWorkoutButton;
