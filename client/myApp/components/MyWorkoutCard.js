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
import {useNavigation} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';
import BackgroundAndCenterContent from './BackgroundAndCenterContent';
import ModalView from './ModalView';

const MyWorkoutCard = ({
  myWorkoutList,
  item,
  itemsCenter,
  navigateToWorkout,
  lengthOfGivenData,
  insideText,
  onWorkoutNameChange, // Add this prop
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  // const [workoutName, setWorkoutName] = useState('');
  const [description, setDescription] = useState('');

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const editProgram = () => {
    setModalVisible(false);
  };
  const deleteProgram = () => {
    setModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => navigateToWorkout(item)}>
      <View
        style={{
          width: wp(70),
          height: hp(17),
          backgroundColor: theme.secondary,
        }}
        className={
          'flex-row relative mt-4 rounded-3xl px-2 justify-between ' +
          itemsCenter
        }>
        <BackgroundAndCenterContent
          source={require('../images/workoutCard3.jpg')}
          width={wp(70)}
          height={hp(17)}
          rounded={true}
        />
        <View className="flex-column justify-center">
          <View style={{width: hp(24)}}>
            <Text
              className="text-white "
              style={{
                fontSize: hp(3),
              }}>
              {myWorkoutList}
            </Text>
          </View>
        </View>
        {/* <View className="absolute" style={{bottom: hp(0), left: hp(0)}}>
          <Text>

          </Text>
        </View> */}

        <TouchableOpacity onPress={showModal}>
          {lengthOfGivenData === 0 ? (
            <Icons.ArrowRightIcon size={hp(4)} color={'white'} />
          ) : (
            <Icons.Bars3Icon size={hp(4)} color={'white'} />
          )}
        </TouchableOpacity>
        <ModalView
          isModalVisible={isModalVisible}
          deleteWorkout={deleteProgram}
          editWorkout={editProgram}
          closeModal={closeModal}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyWorkoutCard;
