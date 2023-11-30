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
import AddButton from '../components/AddButton';
import EditWorkoutModal from '../components/EditWorkoutModal';

const ProgramScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };

  const closeWorkoutModal = () => {
    setModalVisible(false);
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
        <AddButton showModal={showModal} />
        <EditWorkoutModal isWorkoutModalVisible={isModalVisible} closeWorkoutModal={closeWorkoutModal} />
      </ScrollView>
    </View>
  );
};

export default ProgramScreen;
