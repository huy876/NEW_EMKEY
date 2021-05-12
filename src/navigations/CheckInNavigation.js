import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/checkin/HomeScreen'
import NotificationScreen from '../screens/checkin/childscreens/NotificationScreen'

const Stack = createStackNavigator()

const CheckInNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
            />
        </Stack.Navigator>
    )
}

export default CheckInNavigation