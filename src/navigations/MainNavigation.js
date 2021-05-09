import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CheckInNavigation from './CheckInNavigation'
import SignNavigation from './SignNavigation'

const Drawer = createDrawerNavigator()

const MainNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="SignNavigation"
                component={SignNavigation}
            />
            <Drawer.Screen
                name="CheckInNavigation"
                component={CheckInNavigation}
            />
        </Drawer.Navigator>
    )
}

export default MainNavigation