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
import ExerciseList from '../components/ExerciseList';
import StartWorkout from '../components/StartWorkout';
import AddButton from '../components/AddButton';
import EditInputs from '../components/EditInputs';

const EditWorkoutScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const id = route.params?.id;
  const [workoutName, setWorkoutName] = useState('');
  const [description, setDescription] = useState('');
  const [countOfWorkouts, setCountOfWorkouts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 8, 10,
  ]);
  const [countOfSets, setCountOfSets] = useState([1, 2, 3, 4, 5]);
  const navigateTo = () => {
    navigation.navigate('Workout');
  };
  console.log(workoutName);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        className="flex-1 pt-4"
        style={{backgroundColor: theme.background}}>
        <View
          className="flex-row items-center justify-items-start"
          style={{paddingHorizontal: hp(2)}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={theme.secondary}
            className="rounded-xl p-1">
            <Icons.ChevronLeftIcon size={hp(3)} color={'white'} />
          </TouchableOpacity>
          <View>
            <Text className="text-white" style={{fontSize: hp(3)}}>
              Edit Workout
            </Text>
          </View>
        </View>
        <View
          className="flex-1 items-center"
          style={{
            paddingHorizontal: hp(2),
            marginTop: hp(3),
            marginBottom: hp(3),
          }}>
          <Text
            className="font-bold"
            style={{fontSize: hp(4), color: theme.secondary}}>
            {workoutName}
          </Text>
        </View>
        <EditInputs
          workoutName={workoutName}
          description={description}
          setWorkoutName={setWorkoutName}
          setDescription={setDescription}
        />
        <View
          className="flex-1 items-center"
          style={{
            paddingHorizontal: hp(2),
            marginTop: hp(3),
            marginBottom: hp(3),
          }}>
          <Text className="font-bold text-white" style={{fontSize: hp(2)}}>
            {description}
          </Text>
        </View>
        <View style={{marginTop: hp(3), paddingHorizontal: hp(2)}}>
          <View className="flex-row justify-between" style={{marginTop: hp(2)}}>
            <View className="flex-row">
              <View>
                <Image
                  source={require('../images/workoutFLow.png')}
                  className="rounded-full"
                  style={{width: hp(5), height: hp(5)}}
                />
              </View>
              <View>
                <Text className=" text-gray-400">Duration</Text>
                <Text className="text-white font-bold">20-30 min</Text>
              </View>
            </View>
            <View className="flex-row">
              <View>
                <Image
                  source={require('../images/workoutFLow.png')}
                  className="rounded-full"
                  style={{width: hp(5), height: hp(5)}}
                />
              </View>
              <View>
                <Text className=" text-gray-400">Calories</Text>
                <Text className="text-white font-bold">155 kcal</Text>
              </View>
            </View>
            <View className="flex-row">
              <View>
                <Image
                  source={require('../images/workoutFLow.png')}
                  className="rounded-full"
                  style={{width: hp(5), height: hp(5)}}
                />
              </View>
              <View>
                <Text className=" text-gray-400">Weight</Text>
                <Text className="text-white font-bold">200kg</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          className=" rounded-t-3xl "
          style={{
            backgroundColor: theme.likeModal,
            marginTop: hp(4),
            marginBottom: hp(2),
            paddingBottom: hp(15),
          }}>
          <Text
            className="text-white font-bold"
            style={{
              fontSize: hp(2),
              marginTop: hp(2),
              paddingHorizontal: hp(2),
            }}>
            Exercise List
          </Text>
          <ExerciseList data={countOfWorkouts} countOfSets={countOfSets} />
        </View>
      </ScrollView>

      <View>
        <AddButton navigateTo={navigateTo} />
        <StartWorkout />
      </View>
    </View>
  );
};

export default EditWorkoutScreen;
