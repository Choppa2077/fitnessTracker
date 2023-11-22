import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import GoBackButton from '../components/GoBackButton';
import EditInputs from '../components/EditInputs';
import ExerciseList from '../components/ExerciseList';

const SetOfExercisesScreen = () => {
  const [searchInput, setSearchInput] = useState();
  const [filteredExercises, setFilteredExercises] = useState([]);

  const bicepsExercises = [
    'Bicep Curls',
    'Hammer Curls',
    'Preacher Curls',
    'Concentration Curls',
    'Barbell Curl',
    'Dumbbell Curl',
    'EZ-Bar Curl',
    'Spider Curls',
    'Zottman Curl',
    'Incline Dumbbell Curl',
    'Seated Alternating Dumbbell Curl',
    'Standing Resistance Band Curl',
    'Reverse Curl',
    '21s (Seven Sets of Partial Reps)',
    'Bicep Blaster (Isometric Hold)',
    'Drag Curl',
    'Cable Curl',
    'Seated Alternating Hammer Curl',
    'Single-Arm Concentration Curl',
    'Cross Body Hammer Curl',
    'Incline Inner-Biceps Curl',
    'Wide-Grip Barbell Curl',
    'Seated Cable Curl',
    'Alternating Incline Dumbbell Curl',
    'Kettlebell Hammer Curl',
  ];
  const handleSearch = query => {
    setSearchInput(query);
    const newFilteredExercises = bicepsExercises.filter(group =>
      group.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredExercises(newFilteredExercises);
  };
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ScrollView style={{backgroundColor: theme.background}}>
        <GoBackButton navigation={navigation} />
        <View className="flex-1 justify-center items-start">
          <Text
            className="text-white "
            style={{fontSize: hp(3), marginLeft: hp(6), marginTop: hp(2.4)}}>
            Workouts
          </Text>
        </View>
        <View className="items-center mt-14">
          <EditInputs
            textParam={searchInput}
            setInput={handleSearch}
            placeholder={'Username'}
            paddingVertical={hp(1.3)}
            width={hp(39)}
            withIcon={true}
          />
        </View>
        <View
          className="flex-row items-center justify-between my-5"
          style={{paddingHorizontal: hp(3.4)}}>
          <Text className="text-white font-bold" style={{fontSize: hp(2.4)}}>
            Biceps
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Exercises')}>
            <Text className="text-white font-bold" style={{fontSize: hp(2)}}>
              Create
            </Text>
          </TouchableWithoutFeedback>
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
            <ExerciseList
              data={
                filteredExercises.length > 0
                  ? filteredExercises
                  : bicepsExercises
              }
            />
          </View>
          {/* <ExerciseList data={countOfWorkouts} countOfSets={countOfSets} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SetOfExercisesScreen;
