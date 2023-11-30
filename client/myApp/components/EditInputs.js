import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Icons from 'react-native-heroicons/solid';
import Carousel from 'react-native-snap-carousel';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../colors/backgrounds';

// const EditInputs = ({
//   workoutName,
//   description,
//   setWorkoutName,
//   setDescription,
// }) => {
//   return (
//     <View className="flex-1 items-center justify-center absolute z-30">
//       <View>
//         <TextInput
//           placeholder="Workout Name"
//           value={workoutName}
//           onChangeText={text => setWorkoutName(text)}
//           className="rounded-full"
//           style={{
//             backgroundColor: 'white',
//             width: hp(30),
//             marginBottom: hp(3),
//             fontSize: hp(2.5),
//           }}
//         />
//       </View>
//       <View>
//         <TextInput
//           placeholder="Description"
//           value={description}
//           onChangeText={text => setDescription(text)}
//           className="rounded-full"
//           style={{
//             backgroundColor: 'white',
//             width: hp(30),
//             marginBottom: hp(3),
//             fontSize: hp(2.5),
//           }}
//         />
//       </View>
//     </View>
//   );
// };
const EditInputs = ({
  textParam,
  setInput,
  placeholder,
  paddingVertical,
  withIcon,
}) => {
  return (
    <View className="z-30" style={{marginBottom: hp(3)}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'white'}
        value={textParam}
        onChangeText={text => setInput(text)}
        className="rounded-3xl"
        style={{
          backgroundColor: theme.modalInputs,
          width: hp(35),
          fontSize: hp(2.5),
          padding: paddingVertical,
        }}
      />

      {withIcon ? (
        <Icons.MagnifyingGlassCircleIcon
          className="absolute right-0 top-0 bottom-0"
          size={hp(6)}
          color={'white'}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default EditInputs;
