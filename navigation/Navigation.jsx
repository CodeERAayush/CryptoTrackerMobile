// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import DetailScr from '../screens/detailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chart from '../screens/chart';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}
    initialRouteName="Root">
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={DetailScr}/>
        <Stack.Screen name="Chart" component={Chart}/>
      </Stack.Navigator>
  );
}

export default Navigation;