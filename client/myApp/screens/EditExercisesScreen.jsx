import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../colors/backgrounds';
import GoBackButton from '../components/GoBackButton';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReadyWorkoutCard from '../components/ReadyWorkoutCard';
import {RadioButton} from 'react-native-paper';
import PlusMinus from '../components/PlusMinus';
import SetTime from '../components/SetTime';
import MainButton from '../components/MainButton';
import CheckBox from '@react-native-community/checkbox';
import SameRepsPlusMinus from '../components/SameRepsPlusMinus';

const EditExercisesScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState();
  const options = [
    {label: 'Reps', value: 'first'},
    {label: 'Countdown', value: 'second'},
  ];

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [setsArray, setSetsArray] = useState([{reps: 0, load: 0}]);


  const addRow = () => {
    const newRow = {reps: 0, load: 0};
    setSetsArray([...setsArray, newRow]);
  };

  const removeRow = () => {
    if (setsArray.length > 1) {
      setSetsArray(setsArray.slice(0, -1));
    }
  };

  const updateReps = (index, value) => {
    const updatedSetsArray = [...setsArray];
    updatedSetsArray[index].reps = value;
    setSetsArray(updatedSetsArray);
  };

  const updateLoad = (index, value) => {
    // copy the state array
    const updatedSetsArray = [...setsArray];
    // update the load value of the row at the given index
    updatedSetsArray[index].load = value;
    // update the state with the modified array
    setSetsArray(updatedSetsArray);
  };

  const minusRepsHandler = index => {
    let currentReps = setsArray[index].reps;
    if (currentReps > 0) {
      const newReps = currentReps - 1;
      updateReps(index, newReps);
    }
  };

  const plusRepsHandler = index => {
    let currentReps = setsArray[index].reps;
    const newReps = currentReps + 1;
    updateReps(index, newReps);
  };

  const minusLoadHandler = index => {
    let currentLoad = setsArray[index].load;
    if (currentLoad > 0) {
      const newLoad = currentLoad - 0.5;
      updateLoad(index, newLoad);
    }
  };

  const plusLoadHandler = index => {
    let currentLoad = setsArray[index].load;
    const newLoad = currentLoad + 0.5;
    updateLoad(index, newLoad);
  };

  return (
    <View className="flex-1">
      <ScrollView style={{backgroundColor: theme.background}}>
        <GoBackButton navigation={navigation} />
        <View className="flex-1 justify-center items-start">
          <Text
            className="text-white "
            style={{fontSize: hp(3), marginLeft: hp(6), marginTop: hp(2.4)}}>
            Workout
          </Text>
        </View>
        <View className=" items-center my-4">
          <ReadyWorkoutCard
            item=""
            navigateToProgram={''}
            title={''}
            h={hp(17)}
            icon={false}
            w={wp(80)}
          />
        </View>
        <View className="items-center mt-5 mb-2">
          <View
            style={{width: '85%', backgroundColor: theme.calendar}}
            className=" justify-between p-3 rounded-2xl ">
            <View className="items-center flex-row justify-evenly">
              {options.map((option, index) => (
                <View key={index} className="flex-row items-center">
                  <RadioButton
                    value={options.value}
                    status={checked === option.value ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(option.value)}
                    color="black"
                    uncheckedColor="black"
                  />
                  <Text className="text-white font-semibold">
                    {option.label}
                  </Text>
                </View>
              ))}
            </View>
            <View className=" flex-row items-center  justify-evenly">
              <CheckBox
                style={{borderColor: 'white', borderWidth: hp(0.25)}}
                tintColors={{true: 'white', false: 'white'}}
                onCheckColor="white"
                onFillColor="white"
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text className="text-white my-3" style={{fontSize: hp(1.7)}}>
                Same reps and loads for each set
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center mt-5 mb-2">
          {toggleCheckBox ? (
            <SameRepsPlusMinus
              // minusRepsHandler={minusRepsHandler}
              // plusRepsHandler={plusRepsHandler}
              // minusLoadHandler={minusLoadHandler}
              // plusLoadHandler={plusLoadHandler}
            />
          ) : (
            <PlusMinus
              toggleCheckBox={toggleCheckBox}
              addRow={addRow}
              removeRow={removeRow}
              minusRepsHandler={minusRepsHandler}
              plusRepsHandler={plusRepsHandler}
              minusLoadHandler={minusLoadHandler}
              plusLoadHandler={plusLoadHandler}
              setsArray={setsArray}
            />
          )}
        </View>
        <View className="items-center mt-5 pb-40">
          <SetTime />
        </View>
      </ScrollView>
      <View className="items-center">
        <View className="items-center flex-row py-6" style={{width: '85%'}}>
          <MainButton
            absoluteBottom={'absolute bottom-24  left-0'}
            route={''}
            navigation={navigation}
            width={hp(19)}
            rounded={'rounded-2xl'}
            fontLarge={hp(2.5)}
            signUpOrLogin={'Cancel'}
          />
          <MainButton
            absoluteBottom={'absolute bottom-24 right-0 '}
            route={''}
            navigation={navigation}
            width={hp(19)}
            rounded={'rounded-2xl'}
            fontLarge={hp(2.5)}
            signUpOrLogin={'Save'}
          />
        </View>
      </View>
    </View>
  );
};

export default EditExercisesScreen;
