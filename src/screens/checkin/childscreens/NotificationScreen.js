import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import ELayout from '../../../components/ELayout'
import { EText } from '../../../components/EFont'

const NotificationScreen = () => {
    return (
        <ELayout style={styles.screen}>
            <EText>NotificationScreen</EText>
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {

    }
})

export default NotificationScreen