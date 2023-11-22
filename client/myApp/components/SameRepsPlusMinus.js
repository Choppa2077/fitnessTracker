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

const SameRepsPlusMinus = ({data, setPlus, setMinus}) => {
  const arr = [{label: 'Sets'}, {label: 'Reps'}, {label: 'Loads'}];
  const [setsArray, setSetsArray] = useState([{sets: 1, reps: 0, load: 0}]);

  console.log();
  return (
    <View
      style={{width: '85%', backgroundColor: theme.calendar}}
      className="  p-3 rounded-2xl  mb-8 py-6">
      <View className="flex-row justify-evenly">
        {arr.map((item, index) => (
          <SetTimePart
            key={index}
            label={item.label}
            data={setsArray[0].sets}
          />
        ))}
      </View>
    </View>
  );
};

export default SameRepsPlusMinus;
