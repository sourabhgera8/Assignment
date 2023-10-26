import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import Orders from '../screens/Orders';
import WeatherScreen from '../screens/WeatherScreen';


export default function Tabnavigator({ route, navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={'home'} size={22} color={focused ? 'red' : 'black'} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Orders"
                    component={Orders}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Orders',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={'log-in'} size={22} color={focused ? 'red' : 'black'} />
                        ),
                    }}
                />

                


                <Tab.Screen
                    name="WeatherScreen"
                    component={WeatherScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'WeatherScreen',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={'sad'} size={22} color={focused ? 'red' : 'black'} />
                        ),
                    }}
                />






            </Tab.Navigator>

        </View>
    );
}