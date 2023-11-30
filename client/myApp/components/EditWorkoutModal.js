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
import EditInputs from './EditInputs';
import CancelSave from './CancelSave';

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
              Add Workout
            </Text>
            <View className="absolute top-24 ">
              <EditInputs
                textParam={workoutName}
                setInput={setWorkoutName}
                placeholder={'Workout Name'}
                paddingVertical={hp(1.3)}
                withIcon={false}
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

        <CancelSave closeWorkoutModal={closeWorkoutModal}/>
        </View>
      </View>
    </Modal>
  );
};

export default EditWorkoutModal;
