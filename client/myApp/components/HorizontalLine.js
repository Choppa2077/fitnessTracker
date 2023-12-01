import React from 'react';
import {View} from 'react-native';
import { theme } from '../colors/backgrounds';

const HorizontalLine = ({color, height, width}) => {
  return (
    <View
      style={{
        borderBottomColor: color || theme.line,
        borderBottomWidth: height || 1,
        width: width || '100%',
      }}
    />
  );
};

export default HorizontalLine;
