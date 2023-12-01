import {View, Text} from 'react-native';
import React from 'react';
import ExerciseCard from './ExerciseCard';
import HorizontalLine from './HorizontalLine';

const ExerciseList = ({data}) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <ExerciseCard data={data} index={index} />
          {item === data.length ? (
            <View />
          ) : (
            <HorizontalLine key={item} height={3} />
          )}
        </View>
      ))}
    </View>
  );
};

export default ExerciseList;
