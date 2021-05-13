import React from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { EText, H1 } from '../../../components/EFont'
import EHeader from '../../../components/headers/EHeader'
import DummyBusinessImg from '../../../assets/dummy/businessImg.svg'
import moment from 'moment'
import COLOR from '../../../constants/COLOR'
import { PADDING_1 } from '../../../constants/SPACE'
import ClockIcon from '../../../assets/icons/clock.svg'

const NotificationItem = ({noti}) => {
    return (
        <TouchableOpacity style={styles.notiCont}>
            <View style={styles.imgCont}>
                <DummyBusinessImg style={styles.image} />
            </View>
            <View style={styles.notiInfoCont}>
                <H1 style={styles.notiTitle}>{noti.title}</H1>
                <EText style={styles.notiBody}>{noti.body.slice(0, 50) + '...'}</EText>
            </View>
            <View style={styles.notiTimeCont}>
                <ClockIcon style={styles.timeIcon}/>
                <EText style={styles.notiTime}>{moment(noti.time).format('HH:MM')}</EText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    notiCont: {
        flexDirection: 'row',
        padding: PADDING_1,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.grey3
    },
    imgCont: {
        flex: 1,
        marginRight: 10
    },
    image: {
        width: 65,
        height: 65,
        resizeMode: 'contain'
    },
    notiInfoCont: {
        flex: 3,
    },
    notiTitle: {
        fontSize: 18,
        color: COLOR.black3,
        marginBottom: 5
    },
    notiBody: {
        color: COLOR.black3
    },
    notiTimeCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    timeIcon: {
        width: 15,
        height: 15,
        color: COLOR.grey5,
        marginRight: 5
    },
    notiTime: {
        color: COLOR.grey5
    }

})

export default NotificationItem