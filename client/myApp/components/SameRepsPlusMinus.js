import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import * as Icons from 'react-native-heroicons/solid';
import HorizontalLine from './HorizontalLine';
import SetTimePart from './SetTimePart';
import SameRepsPlusMinusPart from './SameRepsPlusMinusPart';

const SameRepsPlusMinus = ({}) => {
  const arr = [{label: 'Sets'}, {label: 'Reps'}, {label: 'Loads'}];
  const [setsArray, setSetsArray] = useState([
    { label: 'Sets', value: 1 },
    { label: 'Reps', value: 0 },
    { label: 'Loads', value: 0 },
  ]);

  const updateValue = (index, newValue) => {
    const updatedSetsArray = [...setsArray];
    updatedSetsArray[index].value = newValue;
    setSetsArray(updatedSetsArray);
  };

  const incrementHandler = (index, step = 1) => {
    const currentValue = setsArray[index].value;
    const customStep = setsArray[index].label === 'Loads' ? 0.5 : step;
    updateValue(index, currentValue + customStep);
  };

  const decrementHandler = (index, step = 1) => {
    const currentValue = setsArray[index].value;
    const customStep = setsArray[index].label === 'Loads' ? 0.5 : step;

    if (currentValue >= customStep) {
      updateValue(index, currentValue - customStep);
    }
  };
  return (
    <View
      style={{width: '85%', backgroundColor: theme.calendar}}
      className="  p-3 rounded-2xl  mb-8 py-6">
      <View className="flex-row justify-evenly">
      {setsArray.map((item, index) => (
          <SameRepsPlusMinusPart
            key={index}
            label={item.label}
            data={item.value}
            setMinus={() => decrementHandler(index)}
            setPlus={() => incrementHandler(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default SameRepsPlusMinus;
