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

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <View className="flex-1 " style={{backgroundColor: theme.background}}>
      <View className="items-center">
        <Image
          style={{width: hp(30), height: hp(30)}}
          source={require('../images/welcome.png')}
        />
      </View>

      <View
        className="rounded-t-3xl flex-1 items-center"
        style={{
          backgroundColor: theme.secondary,
          marginTop: hp(4),
          height: hp(100),
        }}>
        <View style={{width: hp(30), marginTop: hp(5)}}>
          <View>
            <TextInput
              placeholder="Username"
              value={name}
              onChangeText={text => setName(text)}
              className="rounded-full"
              style={{
                backgroundColor: 'white',
                marginBottom: hp(3),
                fontSize: hp(2.5),
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Email Address"
              value={email}
              onChangeText={text => setEmail(text)}
              className="rounded-full"
              style={{
                backgroundColor: 'white',

                marginBottom: hp(3),
                fontSize: hp(2.5),
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              className="rounded-full"
              secureTextEntry
              style={{
                backgroundColor: 'white',

                marginBottom: hp(3),
                fontSize: hp(2.5),
              }}
            />
          </View>

          <ButtonAndAlreadyHave
            navigation={navigation}
            buttonColor={theme.background}
            orAndIcons={true}
            loginTextColor={theme.background}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
