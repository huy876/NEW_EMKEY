import React from 'react' 
import {
    View,
    StyleSheet
} from 'react-native'
import COLOR from '../../constants/COLOR'
import { SCREEN_WIDTH } from '../EUtils'
import { MARGIN_1 } from '../../constants/SPACE'
import BottomNavOption from './BottomNavOption'
import { H1 } from '../EFont'

import CheckIn1Icon from '../../assets/icons/options-list/check-in-1.svg'
import FavoriteIcon from '../../assets/icons/options-list/favorite.svg'
import QueueingIcon from '../../assets/icons/options-list/queueing.svg'
import WaitingTimeIcon from '../../assets/icons/options-list/waiting-time.svg'
import VideoCallingIcon from '../../assets/icons/options-list/video-calling.svg'
import BookAvailabilityIcon from '../../assets/icons/options-list/book-availability.svg'
import MessageIcon from '../../assets/icons/options-list/message.svg'
import PaymentIcon from '../../assets/icons/options-list/payment.svg'
import HistoryIcon from '../../assets/icons/options-list/history.svg'
import BillSplitIcon from '../../assets/icons/options-list/bill-split.svg'
import StockIcon from '../../assets/icons/options-list/search-stock.svg'
import FeedBackIcon from '../../assets/icons/options-list/feedback.svg'
import { connect } from 'react-redux'
import { setBotNavDisplayState } from '../../stores/actions/botNavAction'

const BottomNavOptionsList = (props) => {
    const handleQueeing = () => {
        props.setQueueingState(1)
        props.setBotNavDisplayState(3)
    }

    return (
        <View style={{...styles.container, ...props.style}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <H1 style={{fontSize: 22, color: COLOR.pink1}}>Select option</H1>
            </View>
            <View style={styles.wraper}>
                <BottomNavOption 
                    Icon={CheckIn1Icon}
                    title="Check In"
                />
                <BottomNavOption 
                    Icon={FavoriteIcon}
                    title="Favourites "
                />
                <BottomNavOption 
                    Icon={QueueingIcon}
                    title="Queueing"
                    onPress={handleQueeing}
                />
                <BottomNavOption 
                    Icon={WaitingTimeIcon}
                    title="Waiting time"
                />
                <BottomNavOption 
                    Icon={VideoCallingIcon}
                    title="Video Calling"
                />
                <BottomNavOption 
                    Icon={BookAvailabilityIcon}
                    title="Book Availability"
                />
                <BottomNavOption 
                    Icon={MessageIcon}
                    title="Message"
                />
                <BottomNavOption 
                    Icon={PaymentIcon}
                    title="Payment"
                />
                <BottomNavOption 
                    Icon={HistoryIcon}
                    title="History"
                />
                <BottomNavOption 
                    Icon={BillSplitIcon}
                    title="Bill Split"
                />
                <BottomNavOption 
                    Icon={StockIcon}
                    title="Stock"
                />
                <BottomNavOption 
                    Icon={FeedBackIcon}
                    title="Feedback"
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12, 
        height: 500,
        borderWidth: 2,
        position: 'absolute',
        zIndex: 18,
        bottom: 0,
        borderColor: COLOR.pink1,
        backgroundColor: COLOR.white,
        borderBottomWidth: 0
    },
    wraper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH - 3,
        marginBottom: MARGIN_1,
        height: 400,
        alignContent: 'space-around',
        justifyContent: 'space-between'
    }
})

const mapDispatchToProps = dispatch => ({
    setBotNavDisplayState: displayState => dispatch(setBotNavDisplayState(displayState))
})

export default connect(null, mapDispatchToProps)(BottomNavOptionsList)