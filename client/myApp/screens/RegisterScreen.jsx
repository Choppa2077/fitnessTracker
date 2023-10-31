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

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://192.168.79.49:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
  
      if (response.status === 201) {
        // Registration successful
        // You can navigate the user to the welcome screen or perform any other actions here

      } else {
        // Handle registration errors, e.g., username already exists
      }
    } catch (error) {
      // Handle network errors
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
          Sign Up
        </Text>
      </View>
      <View className="flex-1 justify-center">
        <EditInputs
          textParam={username}
          setInput={setUsername}
          placeholder={'Username'}
        />
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
        route={""}
        navigation={navigation}
        mainColor={theme.newMainColor}
        signUpOrLogin={'Sign Up'}
        
      />
    </View>
  );
};

export default RegisterScreen;
