import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Splash,
  Register,
  Login,
  UploadPhoto,
  Ustadz,
  Messages,
  Doa,
  PilihUstadz,
  Chatting,
  UserProfile,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
      <Tab.Screen name="Ustadz" component={Ustadz} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Do'a Harian" component={Doa} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PilihUstadz"
        component={PilihUstadz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
