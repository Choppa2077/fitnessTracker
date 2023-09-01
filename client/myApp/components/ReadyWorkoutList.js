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

  const handleClick = item => {
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

      <Carousel
        data={data}
        renderItem={({item}) => (
          <ReadyWorkoutCard
            item={item}
            handleClick={handleClick}
            insideText={'Muscle hypertrophy'}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.7}
        sliderWidth={wp(100)}
        itemWidth={wp(70)}
        sliderStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

export default ReadyWorkoutList;
