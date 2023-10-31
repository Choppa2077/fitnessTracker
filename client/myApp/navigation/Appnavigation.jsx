import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateWorkoutScreen from '../screens/EditWorkoutScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import BottomTabs from '../src/BottomTabs';
import EditWorkoutScreen from '../screens/EditWorkoutScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditWorkout" component={EditWorkoutScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
      </Stack.Navigator>
      {/* <BottomTabs /> */}
    </NavigationContainer>
  );
};

export default Appnavigation;

// const {user} = useAuth();

// if (user) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="EditWorkout" component={EditWorkoutScreen} />
//         <Stack.Screen name="Workout" component={WorkoutScreen} />
//       </Stack.Navigator>
//       {/* <BottomTabs /> */}
//     </NavigationContainer>
//   );
// } else {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Welcome"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//       {/* <BottomTabs /> */}
//     </NavigationContainer>
//   );
// }
