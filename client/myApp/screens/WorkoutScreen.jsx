import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GoBackButton from '../components/GoBackButton';
import {useNavigation} from '@react-navigation/native';
import InfoWorkout from '../components/InfoWorkout';
import HorizontalLine from '../components/HorizontalLine';
import ExerciseList from '../components/ExerciseList';
import MainButton from '../components/MainButton';

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const suggestedWorkout = [
    'Bench Press',
    'Tricep Dips',
    'Incline Bench Press',
    'Close-Grip Bench Press',
    'Push-Ups',
    'Skull Crushers',
    'Dumbbell Flyes',
  ];
  
  return (
    <View className="flex-1 ">
      <ScrollView style={{backgroundColor: theme.background}}>
        <GoBackButton navigation={navigation} />
        <View className="flex-1 justify-center items-start">
          <Text
            className="text-white "
            style={{fontSize: hp(3), marginLeft: hp(6), marginTop: hp(2.4)}}>
            Set of Workouts
          </Text>
        </View>
        <View style={{width: '100%'}} className="items-center">
          <View className="mt-8 mb-5 " style={{width: '85%'}}>
            <Text className="text-white font-bold" style={{fontSize: hp(2.6)}}>
              Workout A
            </Text>
          </View>
        </View>
        <View className="items-center">
          <InfoWorkout />
          <HorizontalLine color={theme.line} height={3} width={'85%'} />
        </View>
        <View
          className="flex-row items-center justify-between my-5"
          style={{paddingHorizontal: hp(3.4)}}>
          <Text className="text-white font-bold" style={{fontSize: hp(2.4)}}>
            Exercises
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Exercises')}>
            <Text className="text-white font-bold" style={{fontSize: hp(2)}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{width: '100%', marginBottom: hp(15)}}
          className="items-center">
          <View
            className="items-center rounded-xl py-4 w-screen"
            style={{
              width: '85%',

              backgroundColor: theme.calendar,
            }}>
            <ExerciseList data={suggestedWorkout}  />
          </View>
          {/* <ExerciseList data={countOfWorkouts} countOfSets={countOfSets} /> */}
        </View>
      </ScrollView>
      <View className="items-center">
        <MainButton
          absoluteBottom={'absolute bottom-4 '}
          route={''}
          navigation={navigation}
          width={hp(39)}
          rounded={'rounded-2xl'}
          fontLarge={hp(2.5)}
          signUpOrLogin={'Start Workout'}
        />
      </View>
    </View>
  );
};

export default WorkoutScreen;
