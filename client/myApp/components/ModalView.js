import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import ReactNativeModal from 'react-native-modal';
import MainButton from './MainButton';
import {useNavigation} from '@react-navigation/native';

const ModalView = ({
  isModalVisible,
  deleteWorkout,
  editWorkout,
  closeModal,
}) => {
  const options = [1, 2, 3];
  const navigation = useNavigation();
  return (
    <Modal transparent={true} visible={isModalVisible} animationType="fade">
      <View className="flex-1 items-center justify-center">
        <View
          className="p-8 rounded-3xl flex-row "
          style={{
            backgroundColor: theme.calendar,
            width: hp(37),
            height: hp(45),
          }}>
          <View className="flex justify-evenly">
            <MainButton
              absoluteBottom={''}
              route={''}
              navigation={navigation}
              width={hp(31)}
              rounded={'rounded-full'}
              fontLarge={hp(2.5)}
              signUpOrLogin={'Delete'}
            />
            <MainButton
              absoluteBottom={''}
              route={''}
              navigation={navigation}
              width={hp(31)}
              rounded={'rounded-full'}
              fontLarge={hp(2.5)}
              signUpOrLogin={'Edit'}
              editWorkout={editWorkout}
            />
            <MainButton
              absoluteBottom={''}
              route={''}
              navigation={navigation}
              width={hp(31)}
              rounded={'rounded-full'}
              fontLarge={hp(2.5)}
              signUpOrLogin={'Cancel'}
              closeModal={closeModal}
            />
          </View>
        </View>
      </View>
    </Modal>
    // <Modal transparent={true} visible={isModalVisible} animationType="fade">
    //   <View className="flex-1  items-center justify-center">
    //     <View
    //       className="p-8 rounded-lg items-center "
    //       style={{
    //         backgroundColor: theme.background,
    //         width: hp(40),
    //         height: hp(50),
    //       }}>
    //       <View>
    //         <Text
    //           className="font-extrabold"
    //           style={{
    //             fontSize: hp(3),
    //             marginBottom: hp(1),
    //             color: theme.secondary,
    //           }}>
    //           Create a workout routine
    //         </Text>
    //         <MainButton
    //           route={''}
    //           navigation={navigation}
    //           signUpOrLogin={'Cancel'}
    //         />
    //         <MainButton
    //           route={''}
    //           navigation={navigation}
    //           signUpOrLogin={'Cancel'}
    //         />
    //       </View>

    //       <View style={{width: hp(40)}} className="flex-row justify-evenly">
    //         <TouchableOpacity onPress={closeModal}>
    //           <Text
    //             style={{color: theme.close, fontSize: hp(2.5)}}
    //             className="font-bold">
    //             Cancel
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{color: theme.secondary, fontSize: hp(2.5)}}
    //             className="font-bold">
    //             Save
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    // </Modal>
  );
};

export default ModalView;
