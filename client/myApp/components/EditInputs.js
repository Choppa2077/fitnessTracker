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
const EditInputs = ({textParam, setInput, placeholder}) => {
  return (
    // <View className="absolute z-30 " style={{}}>
    //   <TextInput
    //     placeholder={placeholder}
    //     value={textParam}
    //     onChangeText={text => setInput(text)}
    //     className=" rounded-xl  flex-1 justify-start"
    //     style={{
    //       backgroundColor: theme.input,
    //       width: hp(35),
    //       marginBottom: hp(3),
    //       fontSize: hp(2.5),
    //       paddingVertical: hp(2),
    //     }}
    //   />
    // </View>
    <View className="z-30" style={{marginBottom: hp(3)}}>
      <TextInput
        className=" rounded-3xl"
        placeholderTextColor="white"
        placeholder={placeholder}
        value={textParam}
        onChangeText={text => setInput(text)}
        style={{
          backgroundColor: theme.input,
          width: hp(35),
          fontSize: hp(2.5),
          paddingVertical: hp(3),
          paddingLeft:hp(2)
        }}
      />
    </View>
  );
};
export default EditInputs;
