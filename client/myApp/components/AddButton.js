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

const AddButton = ({showModal}) => {
  return (
    <View className=" items-end" style={{marginTop:hp(5), paddingHorizontal: hp(2)}}>
      <TouchableWithoutFeedback onPress={showModal}>
        <Icons.PlusCircleIcon size={hp(8)} color={theme.newMainColor} />
      </TouchableWithoutFeedback>
    </View>
  );

  // <View
  //       className="flex-1 items-end justify-center"
  //       style={{height: hp(8), marginBottom:hp(10)}}>
  //       <TouchableWithoutFeedback
  //         onPress={() => navigation.navigate('EditWorkout')}>
  //         <Icons.PlusCircleIcon size={hp(7)} color={theme.secondary} />
  //       </TouchableWithoutFeedback>
  //     </View>
};

export default AddButton;
