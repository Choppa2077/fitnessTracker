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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="font-bold text-black"
        style={{fontSize: hp(3), marginBottom: hp(2)}}>
        Register now
      </Text>
      <View>
        <TextInput
          placeholder="Name"
          value={email}
          onChangeText={text => setEmail(text)}
          className="rounded-full"
          style={{
            backgroundColor: 'white',
            width: hp(30),
            marginBottom: hp(3),
            fontSize: hp(2.5),
          }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          value={password}
          onChangeText={text => setPassword(text)}
          className="rounded-full"
          style={{
            backgroundColor: 'white',
            width: hp(30),
            marginBottom: hp(3),
            fontSize: hp(2.5),
          }}
        />
      </View>

      <View>
        <TouchableOpacity
          className="rounded-xl"
          style={{
            backgroundColor: theme.secondary,
            paddingHorizontal: hp(2),
            paddingVertical: hp(1),
          }}>
          <Text className="font-bold text-white" style={{fontSize: hp(3)}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
