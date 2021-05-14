import React, { useState } from 'react'
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
import StandQueuePopup from './components/StandQueuePopup'

const HomeScreen = ({navigation}) => {
    //0-no queueing, 1-ask for queueing, 2- queueing
    const [queueingState, setQueueingState] = useState(0)

    const renderQueueing = () => {
        return queueingState === 1 && <StandQueuePopup />
    }

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
            {renderQueueing()}
            <SideNavButton navigation={navigation}/>
            <BottomTabNavBar setQueueingState={setQueueingState}/>
            
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        
    }
})

export default HomeScreen