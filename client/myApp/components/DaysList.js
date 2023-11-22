import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';
import VerticalLine from './VerticalLine';
import Modal from './ModalView';
import {useNavigation} from '@react-navigation/native';
import ModalView from './ModalView';

const Days = ({lines}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
    console.log('something doing');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteWorkout = () => {};

  const editWorkout = () => {};

  const saveWorkout = () => {
    // Handle saving the workout here
    closeModal();
  };

  return (
    <View
      className="flex-row justify-evenly items-center"
      style={{marginTop: hp(3)}}>
      <View className="flex-row justify-between" style={{width: '42%'}}>
        <View
          className="first-line:rounded-full flex items-center justify-center"
          style={{backgroundColor: 'white', width: hp(5), height: hp(5)}}>
          <Text className="text-black font-bold">Sun</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
          <View>
            <Text className="text-white font-bold" style={{fontSize: hp(2.3)}}>
              Workout A
            </Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={require('../images/dum.png')}
              style={{width: hp(4), height: hp(3)}}
            />
            <Text
              className="text-white"
              style={{fontSize: hp(1.4), marginLeft: hp(1)}}>
              3 exercises
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={showModal}>
          <Icons.AdjustmentsVerticalIcon size={hp(4)} color={'white'} />
        </TouchableOpacity>
        <ModalView
          isModalVisible={isModalVisible}
          deleteWorkout={deleteWorkout}
          editWorkout={editWorkout}
          closeModal={closeModal}
        />
      </View>
    </View>
  );
};

export default Days;
