import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/login/LoginScreen'
import SignUpScreen from '../screens/signup/SignUpScreen'
import GetStartedScreen from '../screens/start/GetStartedScreen'
import UploadYourPictureScreen from '../screens/signup/childscreens/UploadYourPictureScreen'
import AccountVerificationScreen from '../screens/signup/childscreens/AccountVerificationScreen'
import IdCardVerificationScreen from '../screens/signup/childscreens/IdCardVerificationScreen'
import TakeASelfieScreen from '../screens/signup/childscreens/TakeASelfieScreen'
import VerificationStatusScreen from '../screens/signup/childscreens/VerificationStatusScreen'

const Stack = createStackNavigator()

const SignNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="GetStartedScreen"
                component={GetStartedScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />
            <Stack.Screen
                name="UploadYourPictureScreen"
                component={UploadYourPictureScreen}
            />
            <Stack.Screen
                name="AccountVerificationScreen"
                component={AccountVerificationScreen}
            />
            <Stack.Screen
                name="IdCardVerificationScreen"
                component={IdCardVerificationScreen}
            />
            <Stack.Screen
                name="TakeASelfieScreen"
                component={TakeASelfieScreen}
            />
            <Stack.Screen
                name="VerificationStatusScreen"
                component={VerificationStatusScreen}
            />
        </Stack.Navigator>
    )
}

export default SignNavigation