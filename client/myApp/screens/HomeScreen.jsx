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

const HomeScreen = () => {
  const [myWorkoutList, setMyWorkoutList] = useState([1, 2, 3]);
  const [readyWorkoutList, setReadyWorkoutList] = useState([1, 2, 3]);
  const navigation = useNavigation();
  const [workoutName, setWorkoutName] = useState(''); // State to store workoutName

  const handleWorkoutNameChange = newWorkoutName => {
    setWorkoutName(newWorkoutName); // Update workoutName state
  };
  console.log(workoutName);
  return (
    <ScrollView
      className="flex-1 px-3 pt-4"
      style={{backgroundColor: theme.background}}>
      <StatusBar style="white" />
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white" style={{fontSize: hp(4)}}>
            Hello,
            <Text className="font-extrabold" style={{color: theme.secondary}}>
              Mukan
            </Text>
          </Text>
          <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
            Get ready for today's workout!
          </Text>
        </View>
        <Image
          className="rounded-full"
          style={{width: hp(6), height: hp(6)}}
          source={require('../images/workoutFLow.png')}
        />
      </View>

      <CustomCalendar />
      <MyWorkoutList
        // title="Ready Workouts"
        // subtitle="You can customize even ready workouts"
        // insideText={'Muscle hypertrophy'}
        onWorkoutNameChange={handleWorkoutNameChange}
        data={myWorkoutList}
      />
      {/* <MyWorkoutList
        title="Ready Workouts"
        subtitle="You can customize even ready workouts"
        insideText={'Muscle hypertrophy'}
        data={readyWorkoutList}
      /> */}

      <ReadyWorkoutList data={readyWorkoutList} />
      {/* <CreateWorkoutButton/> */}
      <View
        className="flex-1 items-end justify-center"
        style={{height: hp(10), marginTop: hp(2)}}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('EditWorkout')}>
          <Icons.PlusCircleIcon size={hp(7)} color={theme.secondary} />
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
