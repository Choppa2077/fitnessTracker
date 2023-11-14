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

const MyWorkoutCard = ({
  item,
  itemsCenter,
  navigateToProgram,
  lengthOfGivenData,
  insideText,
  onWorkoutNameChange,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const [description, setDescription] = useState('');

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveWorkout = () => {
    onWorkoutNameChange(workoutName);
    closeModal();
  };

  return (
    <TouchableWithoutFeedback onPress={() => navigateToProgram(item)}>
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
              {lengthOfGivenData === 0 ? insideText : workoutName}
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
        {lengthOfGivenData != 0 ? (
          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="fade">
            <View className="flex-1  items-center justify-center">
              <View
                className="p-8 rounded-lg items-center "
                style={{
                  backgroundColor: theme.background,
                  width: hp(40),
                  height: hp(50),
                }}>
                <View>
                  <Text
                    className="font-extrabold"
                    style={{
                      fontSize: hp(3),
                      marginBottom: hp(1),
                      color: theme.secondary,
                    }}>
                    Create a workout routine
                  </Text>
                  <View>
                    <Text
                      className="text-white"
                      style={{fontSize: hp(2), marginBottom: hp(1)}}>
                      Name
                    </Text>
                    <TextInput
                      placeholder="Workout Name"
                      value={workoutName}
                      onChangeText={text => setWorkoutName(text)}
                      className="rounded-full"
                      style={{
                        backgroundColor: 'white',
                        width: hp(30),
                        marginBottom: hp(3),
                        fontSize: hp(2.5),
                      }}
                    />
                  </View>

                  <View>
                    <Text
                      className="text-white"
                      style={{fontSize: hp(2), marginBottom: hp(1)}}>
                      Details
                    </Text>
                    <TextInput
                      placeholder="Description(Optional)"
                      value={description}
                      onChangeText={text => setDescription(text)}
                      className=" rounded-3xl"
                      style={{
                        backgroundColor: 'white',
                        width: hp(30),
                        height: hp(10),
                        marginBottom: hp(3),
                        fontSize: hp(2.5),
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{width: hp(40)}}
                  className="flex-row justify-evenly">
                  <TouchableOpacity onPress={closeModal}>
                    <Text
                      style={{color: theme.close, fontSize: hp(2.5)}}
                      className="font-bold">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={saveWorkout}>
                    <Text
                      style={{color: theme.secondary, fontSize: hp(2.5)}}
                      className="font-bold">
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        ) : (
          <View />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyWorkoutCard;
