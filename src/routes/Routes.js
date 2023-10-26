import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from '../tabs/Tab';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Orders from '../screens/Orders';
import WeatherScreen from '../screens/WeatherScreen';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';




const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">

                <Stack.Screen options={{ headerShown: false }}
                    name="TabNavigator" component={TabNavigator} />

                <Stack.Screen options={{ headerShown: false }}
                    name="SplashScreen" component={SplashScreen} />

                <Stack.Screen options={{ headerShown: false }}
                    name="LoginScreen" component={LoginScreen} />


                <Stack.Screen options={{ headerShown: false }}
                    name="HomeScreen" component={HomeScreen} />

                <Stack.Screen options={{ headerShown: false }}
                    name="SignUp" component={SignUp} />

                


                <Stack.Screen options={{ headerShown: false }}
                    name="Forgot" component={Forgot} />

                    
                <Stack.Screen options={{ headerShown: false }}
                    name="Orders" component={Orders} />

                <Stack.Screen options={{ headerShown: false }}
                    name="WeatherScreen" component={WeatherScreen} />

<Stack.Screen options={{ headerShown: false }}
                    name="FirstScreen" component={FirstScreen} />









            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;