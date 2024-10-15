import { Home } from "./home/home";
import { Profile } from "./profile/profile";
import { Activity } from "./activities/activity";
import { Service } from "./service/service";
import AntDesign from '@expo/vector-icons/AntDesign';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//let get route props so as to specify its type to 
import { RouteProp } from '@react-navigation/native';

type TabParamList = {
  Home: undefined;
  Service: undefined;
  Activity: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabMain() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<TabParamList, keyof TabParamList> }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof AntDesign.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Service') {
            iconName = focused ? 'appstore-o' : 'appstore-o';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
