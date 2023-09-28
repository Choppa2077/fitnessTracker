import {View, Text} from 'react-native';
import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({data, countOfSets}) => {
  const lengthOfGivenData = data.length;
  return (
    <View>
      {data.map((item, index) => (
        <ExerciseCard
          key={index}
          countOfSets={countOfSets}
          lengthOfGivenData={lengthOfGivenData}
        />
      ))}
    </View>
  );
};

export default ExerciseList;
