import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateWorkoutScreen from '../screens/EditWorkoutScreen';
import BottomTabs from '../src/TabNavigator';
import EditWorkoutScreen from '../screens/EditWorkoutScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ProgramScreen from '../screens/ProgramScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import SetOfExercisesScreen from '../screens/SetOfExercisesScreen';
import EditExercisesScreen from '../screens/EditExercisesScreen';

const Stack = createNativeStackNavigator();

const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EditExercises"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Program" component={ProgramScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="SetOfExercises" component={SetOfExercisesScreen} />
        <Stack.Screen name="EditExercises" component={EditExercisesScreen} />
      </Stack.Navigator>
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
