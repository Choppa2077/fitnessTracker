import React from 'react';
import { View } from 'react-native';

const HorizontalLine = ({ color, height, width }) => {
  return (
    <View
      style={{
        borderBottomColor: color || 'black',
        borderBottomWidth: height || 1,
        width: width || '100%',
      }}
    />
  );
};

export default HorizontalLine;
