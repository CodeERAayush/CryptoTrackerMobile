import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { create } from '@mui/material/styles/createTransitions';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen'



const Tab=createBottomTabNavigator();
export const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false,
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'grey',
            tabBarStyle:{
                backgroundColor:'#181818'
            }
        }}>
            <Tab.Screen name='Home' component={HomeScreen}
            options={
                {
                    tabBarIcon:()=>(<Feather name="home" size={24} color="White" />);
                }
            }
            />
            {/* <Tab.Screen name ='Wishlist'/> */}
        </Tab.Navigator>
    )
}