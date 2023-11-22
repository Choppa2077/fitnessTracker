import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainButton from './MainButton';
import {useNavigation} from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import HorizontalLine from './HorizontalLine';
import VerticalLine from './VerticalLine';

const EditWorkoutModal = ({isWorkoutModalVisible, closeWorkoutModal}) => {
  const navigation = useNavigation();
  const [workoutName, setWorkoutName] = useState('');
  const [checkedDays, setCheckedDays] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleCheckBox = index => {
    const newCheckedDays = [...checkedDays];
    newCheckedDays[index] = !newCheckedDays[index];
    setCheckedDays(newCheckedDays);
  };

  return (
    <Modal
      className="relative "
      transparent={true}
      visible={isWorkoutModalVisible}
      animationType="fade">
      <View className="flex-1 items-center justify-center">
        <View
          className="py-8 rounded-3xl "
          style={{
            backgroundColor: theme.calendar,
            width: hp(37),
            height: hp(56),
          }}>
          <View className="flex-1 items-center">
            <Text className="text-white font-bold" style={{fontSize: hp(3)}}>
              Edit Workout
            </Text>
            <View className="absolute top-32 ">
              <TextInput
                placeholder="Workout Name"
                placeholderTextColor="white"
                value={workoutName}
                onChangeText={text => setWorkoutName(text)}
                className="rounded-full"
                style={{
                  backgroundColor: theme.placeholder,
                  width: hp(33),
                  marginBottom: hp(3),
                  fontSize: hp(2.5),
                }}
              />
            </View>
            <View className="absolute bottom-20 flex-row ">
              {daysOfTheWeek.map((day, index) => (
                <View key={day} className="items-center mx-2">
                  <Text className="text-white my-3" style={{fontSize: hp(1.7)}}>
                    {daysOfTheWeek[index]}
                  </Text>
                  <CheckBox
                    style={{borderColor: 'white', borderWidth: hp(0.25)}}
                    tintColors={{true: 'white', false: 'white'}}
                    onCheckColor="white"
                    onFillColor="white"
                    disabled={false}
                    value={checkedDays[index]}
                    onValueChange={() => toggleCheckBox(index)}
                  />
                </View>
              ))}
            </View>
          </View>
          <View className="absolute top-64 left-6">
            <Text className="text-white font-bold" style={{fontSize: hp(2.3)}}>
              Days of this Workout
            </Text>
          </View>
          {/* <View className="absolute bottom-0 left-0">
            <HorizontalLine color={theme.border} height={10} width={'100%'} />
          </View> */}
          <HorizontalLine color={theme.border} height={2} width={'100%'} />

          <View className="flex-row  justify-between mt-3">
            <TouchableOpacity className="ml-10" onPress={closeWorkoutModal}>
              <Text className="text-white" style={{fontSize: hp(3)}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <VerticalLine color={theme.border} height={30} />
            <TouchableOpacity className="mr-10">
              <Text className="text-white" style={{fontSize: hp(3)}}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditWorkoutModal;
