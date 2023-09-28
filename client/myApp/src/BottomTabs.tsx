import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateWorkoutScreen from '../screens/EditWorkoutScreen';
import WorkoutScreen from '../screens/WorkoutScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{headerShown: false}}>
        {/* <Tab.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Create a Workout'}}
          name="CreateWorkout"
          component={CreateWorkoutScreen}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Train'}}
          name="Workout"
          component={WorkoutScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
