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
import EditInputs from '../components/EditInputs';
import MainButton from '../components/MainButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.100.11:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.status === 200) {
        console.log('Data is sended');
        navigation.navigate('Home');
      } else if (response.status === 400) {
        console.log('Incorrect username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 items-center ">
      <BackgroundAndCenterContent
        source={require('../images/newWelcome.jpg')}
      />
      <GoBackButton navigation={navigation} />
      <View className="absolute top-32" style={{marginBottom: hp(10)}}>
        <Text style={{fontSize: hp(5)}} className="text-white font-bold">
          Login
        </Text>
      </View>
      <View className="flex-1 justify-center">
        <EditInputs
          textParam={username}
          setInput={setUsername}
          placeholder={'Username'}
          paddingVertical={hp(3)}
          withIcon={false}
        />
        <EditInputs
          textParam={password}
          setInput={setPassword}
          placeholder={'Password'}
          paddingVertical={hp(3)}
          withIcon={false}
        />
      </View>
      <MainButton
      absoluteBottom={"absolute bottom-36"}
        route={'Home'}
        navigation={navigation}
        signUpOrLogin={'Login'}
        width={hp(34)}
        rounded={"rounded-3xl"}
        fontLarge={hp(2.5)}
        handleSignUp={handleLogin}
      />
      <ButtonAndAlreadyHave
        navigation={navigation}
        mainColor={theme.newMainColor}
        // signUpOrLogin={'Login'}
      />
    </View>
  );
};

export default LoginScreen;
