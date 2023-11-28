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
import MyWorkoutCard from './MyWorkoutCard';

const MyWorkoutList = ({myWorkoutList, data, onWorkoutNameChange}) => {
  const lengthOfGivenData = data.length;
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle card click and open the modal
  const openModal = item => {
    setSelectedItem(item); // Set the selected item when a card is clicked
  };

  // Function to navigate to the 'Workout' screen
  const navigateToWorkout = item => {
    lengthOfGivenData === 0
      ? navigation.navigate('EditWorkout', item)
      : navigation.navigate('Program', item);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null); // Reset the selected item to close the modal
  };

  // console.log(lengthOfGivenData);
  const itemsCenter = 'items-center';
  return (
    <View className="flex-1 " style={{marginTop: hp(3)}}>
      {lengthOfGivenData === 0 ? (
        <View>
          <Text style={{fontSize: hp(2.3)}} className="text-white font-bold ">
            Don't have a Workout?
          </Text>
          <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
            Create your own workout routines
          </Text>
          <MyWorkoutCard
            myWorkoutList={myWorkoutList}
            item={data}
            openModal={openModal}
            itemsCenter={itemsCenter}
            navigateToWorkout={navigateToWorkout}
            lengthOfGivenData={lengthOfGivenData}
            insideText="Create a Workout routine"
            onWorkoutNameChange={onWorkoutNameChange}
          />
        </View>
      ) : (
        <View>
          <Text style={{fontSize: hp(2.3)}} className="text-white font-bold ">
            My workouts
          </Text>
          <Text className="text-gray-300" style={{fontSize: hp(1.6)}}>
            Create your own workout routines
          </Text>
          <Carousel
            data={data}
            renderItem={({item, index}) => (
              <MyWorkoutCard
                myWorkoutList={myWorkoutList[index].tittle}
                item={item}
                openModal={openModal}
                itemsCenter={' '}
                navigateToWorkout={navigateToWorkout}
                lengthOfGivenData={lengthOfGivenData}
                // insideText="aAbs"
                onWorkoutNameChange={onWorkoutNameChange}
              />
            )}
            firstItem={1}
            inactiveSlideOpacity={0.7}
            sliderWidth={wp(100)}
            itemWidth={wp(70)}
            sliderStyle={{display: 'flex', alignItems: 'center'}}></Carousel>
        </View>
      )}
    </View>
  );
};

export default MyWorkoutList;
