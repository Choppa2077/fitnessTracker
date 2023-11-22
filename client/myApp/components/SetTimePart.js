import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HorizontalLine from './HorizontalLine';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';

const SetTimePart = ({label, data}) => {
  const plusSeconds = ()=>{

  }

  const minusSeconds = ()=>{

  }

  const plusMinutes = ()=>{

  }

  const minusMinutes = ()=>{

  }
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const handleTimeChange = (operation) => {
    // Add 15 seconds for plus, subtract for minus
    const newTime = operation === 'plus' ? timeInSeconds + 15 : timeInSeconds - 15;

    // Ensure time doesn't go below 0
    const clampedTime = Math.max(newTime, 0);

    // Update the state with the new time
    setTimeInSeconds(clampedTime);
  };

  // Convert seconds to MM:SS format
  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  console.log();
  return (
    <View className="flex items-center ">
      <TouchableOpacity onPress={() => handleTimeChange('plus')}>
        <Icons.PlusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
      <View className="items-center">
        <Text className="text-white">{label}</Text>
        <Text className="text-white">{formatTime()}</Text>
        <HorizontalLine height={3} />
      </View>
      <TouchableOpacity onPress={() => handleTimeChange('minus')}>
        <Icons.MinusIcon color={theme.calendarItems} size={hp(4)} />
      </TouchableOpacity>
    </View>
  );
};

export default SetTimePart;
