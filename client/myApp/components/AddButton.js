import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import MyWorkoutList from '../components/MyWorkoutList';
import ReadyWorkoutList from '../components/ReadyWorkoutList';
import CustomCalendar from '../components/CustomCalendar';
import {theme} from '../colors/backgrounds';
import CreateWorkoutButton from '../components/CreateWorkoutButton';
import {useNavigation} from '@react-navigation/native';

const AddButton = ({navigateTo}) => {
  return (
    <View
      className="flex-1 items-end "
      //style={{height: hp(10), marginTop: hp(2)}}
    >
      <View
        className="absolute"
        style={{bottom: hp(8), paddingHorizontal: hp(2)}}>
        <TouchableWithoutFeedback onPress={navigateTo}>
          <Icons.PlusCircleIcon size={hp(7)} color={theme.add} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AddButton;
