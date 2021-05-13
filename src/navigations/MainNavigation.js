import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CheckInNavigation from './CheckInNavigation'
import SignNavigation from './SignNavigation'
import SideMenu from './SideMenu'
import { SCREEN_WIDTH } from '../components/EUtils'

const Drawer = createDrawerNavigator()

const MainNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <SideMenu />}
            drawerStyle={{width: SCREEN_WIDTH * .8}}
        >
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