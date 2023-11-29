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
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';
import Sets from './Sets';

const ExerciseCard = ({countOfSets, lengthOfGivenData}) => {
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
    // Handle saving the adminmode here
    closeModal();
  };

  return (
    <View className="flex-row" style={{paddingHorizontal: hp(2)}}>
      <Image
        source={require('../images/workoutFLow.png')}
        style={{width: hp(12), height: hp(12), marginTop: hp(2)}}
      />
      <View
        className=""
        style={{marginTop: hp(2), marginLeft: hp(1), width: hp(30)}}>
        <View className="flex-row justify-between">
          <View style={{marginBottom: hp(1)}}>
            <Text className="text-white font-bold" style={{fontSize: hp(2.5)}}>
              Push up
            </Text>
            <Text className="text-gray-400">Sets</Text>
          </View>
          <TouchableOpacity className="flex-row" onPress={showModal}>
            <Icons.AdjustmentsVerticalIcon color={'white'} size={hp(3)} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row" style={{width: hp(60)}}>
            {countOfSets.map((item, index) => (
              <Sets key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
      <Modal transparent={true} visible={isModalVisible} animationType="fade">
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
            <View style={{width: hp(40)}} className="flex-row justify-evenly">
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
    </View>
  );
};

export default ExerciseCard;
