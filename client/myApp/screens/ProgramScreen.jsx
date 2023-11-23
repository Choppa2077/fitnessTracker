import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import GoBackButton from '../components/GoBackButton';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReadyWorkoutCard from '../components/ReadyWorkoutCard';
import HorizontalLine from '../components/HorizontalLine';
import DaysList from '../components/DaysList';
import Modal from '../components/ModalView';
import AddButton from '../components/AddButton';
import EditWorkoutModal from '../components/EditWorkoutModal';

const ProgramScreen = () => {
  const navigation = useNavigation();
  const [isWorkoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState('');

  const showWorkoutModal = () => {
    setWorkoutModalVisible(true);
    console.log("Workout Modal pressed");
  };
  const closeWorkoutModal = () => {
    setWorkoutModalVisible(false);
  };
  return (
    <View className="flex-1">
      <ScrollView style={{backgroundColor: theme.background}}>
        <GoBackButton navigation={navigation} />
        <View className="flex-1 justify-center items-start">
          <Text
            className="text-white "
            style={{fontSize: hp(3), marginLeft: hp(6), marginTop: hp(2.4)}}>
            Program
          </Text>
        </View>
        <View className=" items-center">
          <ReadyWorkoutCard
            item=""
            navigateToProgram={''}
            title={'Abdomen'}
            h={hp(27)}
            icon={false}
            w={wp(80)}
          />
        </View>
        <View className="items-center" style={{marginTop: hp(4)}}>
          <HorizontalLine color={theme.line} height={3} width={hp(36)} />
        </View>
        <View>
          <DaysList />
          {/* <Modal isModalVisible={isModalVisible} /> */}
        </View>
        <AddButton showWorkoutModal={showWorkoutModal}/>
        <EditWorkoutModal isWorkoutModalVisible={isWorkoutModalVisible} closeWorkoutModal={closeWorkoutModal}/>
      </ScrollView>
    </View>
  );
};

export default ProgramScreen;
