import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VerticalLine from './VerticalLine';
import { theme } from '../colors/backgrounds';

const CancelSave = ({closeWorkoutModal}) => {
  return (
    <View style={{width:hp(40)}} className="flex-row justify-evenly mt-3">
      <TouchableOpacity className="ml-10" onPress={closeWorkoutModal}>
        <Text className="text-white" style={{fontSize: hp(3)}}>
          Cancel
        </Text>
      </TouchableOpacity>
      <VerticalLine color={theme.border} height={'100%'} left={'left-0'} />
      <TouchableOpacity className="mr-10">
        <Text className="text-white" style={{fontSize: hp(3)}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelSave;
