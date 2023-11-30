import React from 'react';
import { View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const VerticalLine = ({ color, width, height, left }) => {
  return (
    <View
    className={left}
      style={{
        backgroundColor: color || 'white',
        width: width || 1,
        height: height || hp(7),

      }}
    />
  );
};

export default VerticalLine;