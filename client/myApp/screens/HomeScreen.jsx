import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import MyWorkoutList from '../components/MyWorkoutList';
import ReadyWorkoutList from '../components/ReadyWorkoutList';
import CustomCalendar from '../components/CustomCalendar';
import {theme} from '../colors/backgrounds';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../components/AddButton';
import EditInputs from '../components/EditInputs';
import CancelSave from '../components/CancelSave';
import HorizontalLine from '../components/HorizontalLine';

const HomeScreen = () => {
  const [myWorkoutList, setMyWorkoutList] = useState([]);
  const [readyWorkoutList, setReadyWorkoutList] = useState([]);
  const navigation = useNavigation();
  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // console.log(myWorkoutList);
  const workouts = [];
  const saveWorkout = async () => {
    try {
      // Make a POST request to your backend API endpoint to save workout data
      // Example using fetch:
      const response = await fetch('http://192.168.51.49:8000/program/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         },
        body: JSON.stringify({
          tittle,
          description,
          workouts,
        }),
      });
      console.log(
        JSON.stringify({
          tittle,
          description,
        }),
      );
      // Check if the request was successful (you may need to adjust based on your API response format)
      if (response.ok) {
        console.log('Workout saved successfully');
        // Optionally, you can fetch updated data after saving
        fetchData();
      } else {
        console.error('Failed to save workout');
      }
    } catch (error) {
      console.error('Error saving workout:', error);
    }

    closeModal();
  };

  const fetchData = async () => {
    // Perform API call to fetch workout data
    try {
      // Make a GET request to your backend API endpoint to fetch workout data
      // Example using fetch:
      const response = await fetch('http://192.168.51.49:8000/program');

      // Check if the request was successful (you may need to adjust based on your API response format)
      if (response.ok) {
        const data = await response.json();
        setMyWorkoutList(data); // Update myWorkoutList with fetched data
        // setLoading(false); // Set loading to false since data fetching is complete
      } else {
        console.error('Failed to fetch workout data');
        // setLoading(false); // Set loading to false even if fetching fails
      }
    } catch (error) {
      console.error('Error fetching workout data:', error);
      // setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    // Fetch initial workout data when the component mounts
    fetchData();
  }, []);

  const handleWorkoutNameChange = newWorkoutName => {
    setTittle(newWorkoutName);
  };
  console.log(myWorkoutList);
  return (
    <ScrollView
      className="flex-1 px-3 pt-4"
      style={{backgroundColor: theme.background}}>
      <StatusBar style="white" />
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white" style={{fontSize: hp(4)}}>
            Hello,
            <Text
              className="font-extrabold"
              style={{color: theme.newMainColor}}>
              {/* {backendData.message} */}
              User
            </Text>
          </Text>
          <Text className="text-white" style={{fontSize: hp(1.6)}}>
            Get ready for today's workout!
          </Text>
        </View>
        <Image
          className="rounded-full"
          style={{width: hp(8), height: hp(8)}}
          source={require('../images/giga.jpg')}
        />
      </View>

      <CustomCalendar />
      <MyWorkoutList
        // title="Ready Workouts"
        // subtitle="You can customize even ready workouts"
        // insideText={'Muscle hypertrophy'}
        myWorkoutList={myWorkoutList}
        onWorkoutNameChange={handleWorkoutNameChange}
        data={myWorkoutList}
      />

      <ReadyWorkoutList data={readyWorkoutList} />
      <AddButton showModal={showModal} className="absolute z-50 bottom-0" />
      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <View className="flex-1  items-center justify-center">
          <View
            className="p-8 rounded-lg items-center "
            style={{
              backgroundColor: theme.calendar,
              width: hp(40),
              height: hp(50),
            }}>
            <View>
              <Text
                className="font-extrabold text-white"
                style={{
                  fontSize: hp(2.5),
                  marginBottom: hp(5),
                }}>
                Create a program
              </Text>
              <View>
                <EditInputs
                  textParam={tittle}
                  setInput={setTittle}
                  placeholder={'Program name'}
                  paddingVertical={hp(3)}
                  withIcon={false}
                />
              </View>
              <View>
                <EditInputs
                  textParam={description}
                  setInput={setDescription}
                  placeholder={'Description(Optional)'}
                  paddingVertical={hp(3)}
                  withIcon={false}
                />
              </View>
            </View>
            <View className="items-center" style={{marginTop: hp(4)}}>
              <HorizontalLine color={theme.line} height={3} width={hp(40)} />
            </View>
            <CancelSave closeWorkoutModal={closeModal} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;
