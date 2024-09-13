
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SliderScreen from './screens/SliderScreen';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Slider" component={SliderScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;