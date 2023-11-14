import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateWorkoutScreen from '../screens/EditWorkoutScreen';
import WorkoutScreen from '../screens/ProgramScreen';
import EditWorkoutScreen from '../screens/EditWorkoutScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ExercicesScreen from '../screens/ExercicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {theme} from '../colors/backgrounds';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { CubeIcon, HomeIcon } from 'react-native-heroicons/solid';
import * as Icons from 'react-native-heroicons/solid';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      // className="rounded-r-lg rounded-l-lg"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: theme.calendar,
          backgroundColor: theme.calendar,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: hp(8),
        },
        tabBarActiveTintColor: theme.newMainColor,
        tabBarInactiveTintColor: 'white',
        // tabBarBackground: "black"
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            position: 'absolute',
            bottom: 10,
            fontSize: hp(1.3),
          },
          tabBarIcon: ({color, size}) => (
            <Icons.HomeIcon name="home" color={'white'} size={24} />
          ),
        }}
        name="HomeTab"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarLabelStyle: {
            position: 'absolute',
            bottom: 10,
            fontSize: hp(1.3),
          },
          tabBarIcon: ({color, size}) => (
            <Icons.CalendarIcon name="home" color={'white'} size={24} />
          ),
        }}
        name="History"
        component={HistoryScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Create',
          tabBarLabelStyle: {
            position: 'absolute',
            bottom: 10,
            fontSize: hp(1.3),
          },
          tabBarIcon: ({color, size}) => (
            <Icons.CubeIcon name="home" color={'white'} size={24} />
          ),
        }}
        name="Create"
        component={CreateWorkoutScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Exercices',
          tabBarLabelStyle: {
            position: 'absolute',
            bottom: 10,
            fontSize: hp(1.3),
          },
          tabBarIcon: ({color, size}) => (
            <Icons.FolderIcon name="home" color={'white'} size={24} />
          ),
        }}
        name="Exercices"
        component={ExercicesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            position: 'absolute',
            bottom: 10,
            fontSize: hp(1.3),
          },
          tabBarIcon: ({color, size}) => (
            <Icons.UserIcon name="home" color={'white'} size={24} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}