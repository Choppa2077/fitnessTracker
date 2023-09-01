import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import {Carousel} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

const ReadyWorkoutCard = ({item, handleClick, insideText}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTimeout(() => setModalVisible(false), 1500);
  };
  const secondary = '#33429b';
  //'#1a2f63';
  //#858baf
  //#7b969f
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View
        className="flex-row items-center relative mt-4 rounded-l-md rounded-r-md px-2 justify-between"
        style={{width: wp(70), height: hp(20), backgroundColor: secondary}}>
          <View className="flex-column justify-center">

        <View style={{width: hp(24)}}>
          <Text className="text-white" style={{fontSize: hp(3)}}>
            {insideText}
          </Text>
        </View>
          </View>

        <View className="absolute" style={{bottom: hp(0), right: hp(0)}}>
          <Image
            style={{height: hp(8.5), width: wp(30)}}
            source={require('../images/gantels.png')}
          />
        </View>

        <TouchableOpacity onPress={toggleModal}>
          <Icons.Bars3Icon size={hp(4)} color={'white'} />
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default ReadyWorkoutCard;
