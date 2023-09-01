import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import {Carousel} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
const CustomCalendar = () => {
  const currentDate = new Date();
  const dummyData = [];
  const daysToShow = 30;

  for (let i = -daysToShow; i <= daysToShow; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);

    const dayOfWeek = date.getDay();
    // console.log(dayOfWeek);
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayName = dayNames[dayOfWeek];

    dummyData.push({
      date: date.getDate(),
      dayOfWeek: dayName,
      isToday: i === 0,
    });
  }
  const backgroundColor = "#1d1d1d"
  const today = "#33429b"
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="rounded-xl"
      style={{marginTop: hp(2), padding: hp(2), backgroundColor:backgroundColor}}>
      {dummyData.map((day, index) => (
        <View
          key={index}
          className="rounded-md mx-2"
          style={[day.isToday && {backgroundColor: today}]}>
          <View className="flex-column items-center">
            <Text className="font-bold text-white" style={{fontSize: hp(2)}}>
              {`${day.date}`}
            </Text>
          </View>
          <Text className="font-bold text-white" style={{fontSize: hp(2)}}>
            {`${day.dayOfWeek} `}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomCalendar;
