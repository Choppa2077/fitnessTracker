import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GoBackButton from '../components/GoBackButton';
import {useNavigation} from '@react-navigation/native';
import EditInputs from '../components/EditInputs';
import * as Icons from 'react-native-heroicons/solid';
import DefaultExercisesList from '../components/DefaultExercisesList';

const ExercisesScreen = () => {
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState();
  const [filteredMuscleGroups, setFilteredMuscleGroups] = useState([]);

  const muscleGroups = [
    'Abs',
    'Back',
    'Biceps',
    'Calves',
    'Cardio',
    'Chest',
    'Deltoids',
    'Forearms',
    'Hamstrings',
    'Quads',
    'Stretching',
    'Triceps',
  ];

  // ok so when user  type somethng onChange
  // property executes and call what we include to call we
  // include setInput params, so  in exercises screen in  params
  //  that called setInput  we include function handleSearch and
  //  in this handleSearch we set sto state of compoenent
  //  what user type in this context what user type called "query"
  //   and we create variable called filteredGropus and in this variable
  //    we filter muscleGropus array we present each element in this context called "group"
  //     to lowercase and
  //     check if it includes the waht
  //      user type(query taht we  received and also present to lower case
  //       and after this set another state using the filtered muslceGroups
  //        array that based on what user type, and after this we give to
  //        defalutExercisesList component params , we can give filtered
  //         muslce group or simple muscle group if user type at least one
  //         character we give filtered and default exercises list component
  //          will use map function for filtered array

  const handleSearch = query => {
    setSearchInput(query);
    const filteredGroups = muscleGroups.filter(group =>
      group.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredMuscleGroups(filteredGroups);
  };
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
            placeholder={'Search anything'}
            paddingVertical={hp(1.3)}
            width={hp(39)}
            withIcon={true}
          />
        </View>
        <View style={{width: '100%'}} className="items-center">
          <View className="my-5 " style={{width: '85%'}}>
            <Text className="text-white font-bold" style={{fontSize: hp(2.6)}}>
              Exercises
            </Text>
          </View>
        </View>
        <View style={{width: '100%'}} className="items-center">
          <DefaultExercisesList
            muscleGroups={
              filteredMuscleGroups.length > 0
                ? filteredMuscleGroups
                : muscleGroups
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExercisesScreen;
