import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import ELayout from '../../../components/ELayout'
import { EText } from '../../../components/EFont'
import EHeader from '../../../components/headers/EHeader'
import dummyNoti from '../../../assets/dummy/businessNoti'
import NotificationList from '../components/NotificationList'

const NotificationScreen = ({navigation}) => {
    return (
        <ELayout style={styles.screen}>
            <EHeader 
                screenTitle="Notification"
                devider={true}
                isBackButton={true}
            />
            <NotificationList 
                notis={dummyNoti}
            />
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {

    }
})

export default NotificationScreen