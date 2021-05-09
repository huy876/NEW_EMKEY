import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import MainNavigaion from './src/navigations/MainNavigation'

const App = () => {
    return (
        <NavigationContainer>
            <MainNavigaion />
        </NavigationContainer>
    )
}

export default App