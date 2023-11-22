import React from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const VerticalLine = ({left, color, width, height}) => {
  return (
    <View
    className=""
      style={{
        backgroundColor: color || 'white',
        width: width || 1,
        height: height || hp(7),
        left: left || 0,
      }}
    />
  );
};

export default VerticalLine;
