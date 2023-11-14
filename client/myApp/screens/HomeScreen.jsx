import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [myWorkoutList, setMyWorkoutList] = useState([1, 2, 3, 4, 5]);
  const [readyWorkoutList, setReadyWorkoutList] = useState([1, 2, 3]);
  const navigation = useNavigation();
  const [workoutName, setWorkoutName] = useState(''); // State to store workoutName
  // const [backendData, setBackendData] = useState([{}]);

  
  // useEffect(() => {
  //   fetch('http://192.168.79.49:8000/get-json-data/')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setBackendData(data)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // console.log(backendData);
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
            <Text
              className="font-extrabold"
              style={{color: theme.newMainColor}}>
              {/* {backendData.message} */}
              User
            </Text>
          </Text>
          <Text className="text-white" style={{fontSize: hp(1.6)}}>
            Get ready for today's workout!
          </Text>
        </View>
        <Image
          className="rounded-full"
          style={{width: hp(8), height: hp(8)}}
          source={require('../images/giga.jpg')}
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
