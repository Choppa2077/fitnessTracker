import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import {useNavigation} from '@react-navigation/native';

const DefaultExercisesCard = ({muscleGroups, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SetOfExercises')}
      className="my-3  flex-row items-center p-3 rounded-xl"
      style={{width: hp(39), backgroundColor: theme.calendar}}>
      <Image
        className="rounded-full"
        style={{width: hp(6), height: hp(6)}}
        source={require('../images/exex.jpg')}
      />
      <View className="mx-3">
        <Text className="text-white font-semibold" style={{fontSize: hp(2)}}>
          {muscleGroups[index]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultExercisesCard;
