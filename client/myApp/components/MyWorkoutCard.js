import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
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

const MyWorkoutCard = ({
  itemsCenter,
  lengthOfGivenData,
  insideText,
  item,
  handleClick,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTimeout(() => setModalVisible(false), 1500);
  };
  const primary = '#3b1960';
  //#36a740
  //"#3b1960"
  //"#541f90"
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View
        style={{width: wp(70), height: hp(20), backgroundColor: primary}}
        className={
          'flex-row relative mt-4 rounded-l-md rounded-r-md px-2 justify-between ' +
          itemsCenter
        }>
        <View className="flex-column justify-center">
          <View style={{width: hp(24)}}>
            <Text
              className="text-white "
              style={{
                fontSize: hp(3),
              }}>
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
          {lengthOfGivenData === 0 ? (
            <Icons.ArrowRightIcon size={hp(4)} color={'white'} />
          ) : (
            <Icons.Bars3Icon size={hp(4)} color={'white'} />
          )}
        </TouchableOpacity>
        {lengthOfGivenData === 0 ? (
          <View />
        ) : (
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}>
            <TouchableOpacity>
              <View
                className="bg-white absolute rounded-md"
                style={{
                  width: hp(13),
                  height: hp(8),
                  top: hp(34),
                  right: hp(8),
                  elevation: 5,
                }}>
                <TouchableOpacity>
                  <Text className="text-black " style={{fontSize: hp(2.5)}}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2">
                  <Text className="text-black " style={{fontSize: hp(2.5)}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyWorkoutCard;