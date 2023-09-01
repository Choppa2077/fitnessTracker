import {View, Text, StatusBar, Image} from 'react-native';
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


const HomeScreen = () => {
  const [myWorkoutList, setMyWorkoutList] = useState([1,2,3]);
  const [readyWorkoutList, setReadyWorkoutList] = useState([1,2,3])
  const backgroundColor = "#161616"
  const primaryText = "#33429b"
  //"#541f90"
  return (
    <ScrollView className="flex-1 px-3 pt-4"
    style={{backgroundColor:backgroundColor}}
    >
      <StatusBar style="white" />
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white" style={{fontSize: hp(4)}}>
            Hello,
            <Text className="font-extrabold" style={{color:primaryText}}>Mukan</Text>
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

     <CustomCalendar/>
      <MyWorkoutList data={myWorkoutList}/>
      <ReadyWorkoutList data={readyWorkoutList}/>
    </ScrollView>
  );
};

export default HomeScreen;
