import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import ELayout from '../../components/ELayout'
import { EText } from '../../components/EFont'
import BottomTabNavBar from '../../components/footers/BottomTabNavBar'

const HomeScreen = () => {
    return (
        <ELayout style={styles.screen}>
            <BottomTabNavBar />
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        
    }
})

export default HomeScreen