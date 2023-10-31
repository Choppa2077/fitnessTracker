import {View, Text, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackgroundAndCenterContent = ({source, width, height, rounded}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={source}
      style={{
        width: width || '100%',
        height: height || Dimensions.get('window').height,
        position: 'absolute',
        position: 'absolute',
        borderRadius: rounded ? 16 : 0, // Adjust the radius value as needed
        overflow: 'hidden',
      }}
    />
  );
};

export default BackgroundAndCenterContent;
