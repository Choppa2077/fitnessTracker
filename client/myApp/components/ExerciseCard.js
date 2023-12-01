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
import ModalView from './ModalView';

const ExerciseCard = ({data, index}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  const showModal = () => {
    setModalVisible(true);
  };

  const deleteWorkout = () => {
    setModalVisible(false);
  };

  const editWorkout = () => {
    setModalVisible(false);
    navigation.navigate("EditExercises")

  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const saveWorkout = () => {
    // Handle saving the adminmode here
    closeModal();
  };

  return (
    <View
      className="flex-row justify-between items-center"
      style={{
        paddingVertical: hp(3),
        // backgroundColor: theme.newMainColor,
        width:hp(35)
      }}>
      <Image
        source={require('../images/exex.jpg')}
        style={{width: hp(14), height: hp(9), marginTop: hp(2)}}
      />
      <View style={{width:hp(16), marginLeft:hp(1)}}>
        <Text className="text-white font-bold" style={{fontSize: hp(2.5)}}>
          {data[index]}
        </Text>
      </View>

      <View>
        <TouchableOpacity className="flex-row" onPress={showModal}>
          <Icons.AdjustmentsVerticalIcon color={'white'} size={hp(3)} />
        </TouchableOpacity>
      </View>

      <ModalView
        isModalVisible={isModalVisible}
        deleteWorkout={deleteWorkout}
        editWorkout={editWorkout}
        closeModal={closeModal}
      />
    </View>
  );
};

export default ExerciseCard;

{
  /* <View className="" style={{marginTop: hp(2), marginLeft: hp(1)}}>
<View className="flex-row justify-between" style={{width:hp(30)}}>
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
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
  <View className="flex-row" >
    {countOfSets.map((item, index) => (
      <Sets key={index} item={item} />
    ))}
  </View>
</ScrollView>
</View> */
}
