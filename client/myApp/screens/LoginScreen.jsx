import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../colors/backgrounds';
import {useNavigation} from '@react-navigation/native';
import ButtonAndAlreadyHave from '../components/ButtonAndAlreadyHave';
import BackgroundAndCenterContent from '../components/BackgroundAndCenterContent';
import GoBackButton from '../components/GoBackButton';
import * as Icons from 'react-native-heroicons/solid';
import Form from '../components/Form';
import EditInputs from '../components/EditInputs';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1 items-center ">
      <BackgroundAndCenterContent source={require('../images/newWelcome.jpg')}/>
      <GoBackButton navigation={navigation} />
      <View className="absolute top-32" style={{marginBottom: hp(10)}}>
        <Text style={{fontSize: hp(5)}} className="text-white font-bold">
          Login
        </Text>
      </View>
      <View className="flex-1 justify-center">
        <EditInputs
          textParam={emailAddress}
          setInput={setEmailAddress}
          placeholder={'Email Address'}
        />
        <EditInputs
          textParam={password}
          setInput={setPassword}
          placeholder={'Password'}
        />
      </View>
      <ButtonAndAlreadyHave
        navigation={navigation}
        mainColor={theme.newMainColor}
        signUpOrLogin={'Login'}
      />
    </View>
  );
};

export default LoginScreen;
