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
import SideNavButton from '../../components/sides/SideNavButton'

const HomeScreen = ({navigation}) => {
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
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 0
                }}
            />
            <SideNavButton navigation={navigation}/>
            <BottomTabNavBar />
            
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        
    }
})

export default HomeScreen