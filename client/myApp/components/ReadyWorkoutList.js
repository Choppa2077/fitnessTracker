import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import {Carousel} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import ReadyWorkoutCard from './ReadyWorkoutCard';

const ReadyWorkoutList = ({data}) => {
  const navigation = useNavigation();

  // Function to navigate to the 'Workout' screen
  const navigateToWorkout = item => {
    navigation.navigate('Workout', item);
  };

  return (
    <View className="flex-1" style={{marginTop: hp(3)}}>
      <View>
        <Text style={{fontSize: hp(2.3)}} className="text-white font-bold ">
          Ready Workouts
        </Text>
        <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
          You can customize even ready workouts
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <ReadyWorkoutCard
            key={index}
            item={item}
            navigateToWorkout={navigateToWorkout}
            insideText={'Muscle hypertrophy'}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ReadyWorkoutList;
