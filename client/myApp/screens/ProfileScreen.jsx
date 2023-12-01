import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {theme} from '../colors/backgrounds';
import GoBackButton from '../components/GoBackButton';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HorizontalLine from '../components/HorizontalLine';
import UserParam from '../components/UserParam';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <ScrollView style={{backgroundColor: theme.background}}>
        <GoBackButton navigation={navigation} />
        <View className="flex-1 justify-center items-start">
          <Text
            className="text-white "
            style={{
              fontSize: hp(3),
              marginLeft: hp(6),
              marginTop: hp(2.4),
            }}></Text>
        </View>
        <View className="items-center my-5">
          <View
            className=" rounded-t-3xl"
            style={{
              height: hp(20),
              width: '80%',
              backgroundColor: theme.backgorundProfile,
            }}></View>
          <Image
            source={require('../images/giga.jpg')}
            className="rounded-full absolute top-36 z-50"
            style={{width: hp(8), height: hp(8)}}
          />
          <View
            className=" rounded-b-3xl"
            style={{
              height: hp(50),
              width: '80%',
              backgroundColor: theme.backgorundProfile2,
            }}>
            <View className="flex-row justify-around">
              <View className="items-center">
                <Text className="text-white">11K</Text>
                <Text className="text-white">Followers</Text>
              </View>
              <View className="items-center">
                <Text className="text-white">346 </Text>
                <Text className="text-white">Following</Text>
              </View>
            </View>
            <View className="items-center my-4">
              <Text className="text-white mb-4" style={{fontSize:hp(3)}}>@MukanIdrissov</Text>
              <HorizontalLine height={2} width={'80%'} />
            </View>
            <View className="items-center">
              <UserParam keyInfo={'Age'} valueInfo={'19'} />
              <UserParam keyInfo={'Height'} valueInfo={'173 cm'} />
              <UserParam keyInfo={'Weight'} valueInfo={'74 kg'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
