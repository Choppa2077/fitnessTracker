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
import {theme} from '../colors/backgrounds';
const CustomCalendar = () => {
  const currentDate = new Date();
  const dummyData = [];
  const daysToShow = 3;

  for (let i = -daysToShow; i <= daysToShow; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);

    const dayOfWeek = date.getDay();
    // console.log(dayOfWeek);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[dayOfWeek];

    dummyData.push({
      date: date.getDate(),
      dayOfWeek: dayName,
      isToday: i === 0,
    });
  }
  const backgroundColor = '#1d1d1d';
  const today = '#33429b';

  // Move today's date to the beginning of the array
  // const todayIndex = dummyData.findIndex(day => day.isToday);
  // if (todayIndex !== -1) {
  //   const todayData = dummyData.splice(todayIndex, 1);
  //   dummyData.unshift(...todayData);
  // }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="rounded-xl"
      style={{
        marginTop: hp(5),
        padding: hp(2),
        paddingBottom: hp(3),
        backgroundColor: theme.calendar,
      }}>
      {dummyData.map((day, index) => (
        <View key={index} className="mx-2 flex-1 items-center">
          
          <Text className="font-bold text-white " style={{fontSize: hp(2)}}>
         {`${day.dayOfWeek}`
}
          </Text>
          <View
            style={[
              day.isToday
                ? {backgroundColor: theme.newMainColor, width:hp(4), height:hp(4)}
                : {backgroundColor: theme.calendarItems, width:hp(4), height:hp(4)},
            ]}
            className="flex-column justify-center first-line:rounded-full items-center mt-2">
            <Text className="font-bold text-black " style={{fontSize: hp(2)}}>
              {`${day.date}`}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomCalendar;