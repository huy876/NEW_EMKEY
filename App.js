import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import MainNavigaion from './src/navigations/MainNavigation'
import { Provider } from 'react-redux'
import store from './src/stores/store'

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainNavigaion />
            </NavigationContainer>
        </Provider>
    )
}

export default App