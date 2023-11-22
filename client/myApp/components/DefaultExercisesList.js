import {View, Text} from 'react-native';
import React from 'react';
import DefaultExercisesCard from './DefaultExercisesCard';

const DefaultExercisesList = ({muscleGroups}) => {
  return (
    <View>
      {muscleGroups.map((item, index) => (
        <DefaultExercisesCard
          key={item}
          muscleGroups={muscleGroups}
          index={index}
        />
      ))}
    </View>
  );
};

export default DefaultExercisesList;
