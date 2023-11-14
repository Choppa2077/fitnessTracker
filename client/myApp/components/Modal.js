import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '../colors/backgrounds';


const Modal = ({isModalVisible}) => {
  
  return (
    <Modal transparent={true} visible={isModalVisible} animationType="fade">
      <View className="flex-1  items-center justify-center">
        <View
          className="p-8 rounded-lg items-center "
          style={{
            backgroundColor: theme.background,
            width: hp(40),
            height: hp(50),
          }}>
            <Text>SS</Text>
          </View>
      </View>
    </Modal>
  );
};

export default Modal;
