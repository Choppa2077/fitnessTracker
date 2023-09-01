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
import MyWorkoutCard from './MyWorkoutCard';

const MyWorkoutList = ({data}) => {
  const lengthOfGivenData = data.length;
  const navigation = useNavigation();

  const handleClick = item => {
    {
      lengthOfGivenData === 0
        ? navigation.navigate('CreateWorkout', item)
        : navigation.navigate('Workout', item);
    }
  };
  // console.log(lengthOfGivenData);
  const itemsCenter = 'items-center';
  return (
    <View className="flex-1 " style={{marginTop: hp(3)}}>
      {lengthOfGivenData === 0 ? (
        <View>
          <Text style={{fontSize: hp(2.3)}} className="text-white font-bold ">
            Don't have a Workout?
          </Text>
          <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
            Create your own workout routines
          </Text>
          <MyWorkoutCard
            itemsCenter={itemsCenter}
            lengthOfGivenData={lengthOfGivenData}
            insideText="Create a Workout routine"
            handleClick={handleClick}
          />
        </View>
      ) : (
        <View>
          <Text style={{fontSize: hp(2.3)}} className="text-white font-bold ">
            My workouts
          </Text>
          <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
            Create your own workout routines
          </Text>
          <Carousel
            data={data}
            renderItem={({item}) => (
              <MyWorkoutCard
                itemsCenter={''}
                lengthOfGivenData={lengthOfGivenData}
                insideText={'Custom Workout'}
                item={item}
                handleClick={handleClick}
              />
            )}
            firstItem={1}
            inactiveSlideOpacity={0.7}
            sliderWidth={wp(100)}
            itemWidth={wp(70)}
            sliderStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
      )}
    </View>
  );
};

export default MyWorkoutList;
