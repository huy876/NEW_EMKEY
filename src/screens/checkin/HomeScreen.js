import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native'

import ELayout from '../../components/ELayout'
import { EText } from '../../components/EFont'
import BottomTabNavBar from '../../components/footers/BottomTabNavBar'

import MapView from 'react-native-maps'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../components/EUtils'

const HomeScreen = () => {
    return (
        <ELayout style={styles.screen}>
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={{
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT,
                    position: 'absolute',
                    zIndex: 0
                }}
            />
            <BottomTabNavBar />
            
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        
    }
})

export default HomeScreen