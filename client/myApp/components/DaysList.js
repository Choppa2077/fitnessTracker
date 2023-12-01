import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Days from './Days';
import VerticalLine from './VerticalLine';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {v4 as uuidv4} from 'react-native-get-random-values';

const DaysList = () => {
  // const unicalD = uuidv4()
  const [daysData, setDaysData] = useState([]);
  const [lines, setLines] = useState([1, 2]);
  return (
    <View>
      {/* {daysData.map(item => (
        <View >
          <Days key={item} lines={lines} />
          {item === daysData.length ? <View /> : <VerticalLine />}
        </View>
      ))} */}
      {daysData ? (
        daysData.map((item, index) => (
          <View>
            <Days key={item} lines={lines} />
            {item === daysData.length ? (
              <View />
            ) : (
              <VerticalLine key={index} left={'left-24'} />
            )}
          </View>
        ))
      ) : (
        <View className="items-center relative">
          <Text className="text-white">Create a workout</Text>
        </View>
      )}
    </View>
  );
};

export default DaysList;
