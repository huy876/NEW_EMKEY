import React, { useState } from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import COLOR from '../constants/COLOR'
import { EText } from './EFont'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './EUtils'
import CheckInIcon from '../assets/icons/check-in.svg'
import StaffIcon from '../assets/icons/staff.svg'
import ShareIcon from '../assets/icons/share.svg'
import PaymentIcon from '../assets/icons/payment.svg'
import ExpandIcon from '../assets/icons/expand.svg'

const ICON_SIZE = SCREEN_WIDTH/6 * 0.6

const Tab = (props) => {
    return (
        <TouchableOpacity style={styles.tab} onPress={props.onPress}>
            <props.Icon 
                style={{
                    ...styles.icon, 
                    color: props.activeTab === props.tabIndex ? COLOR.pink1 : COLOR.grey5
                }} 
            />
            <EText 
                style={{
                    ...styles.tabTitle, 
                    color: props.activeTab === props.tabIndex ? COLOR.pink1 : COLOR.grey5
                }}>{props.title}</EText>
        </TouchableOpacity>
    )
}

const BottomTabNavBar = () => {
    const [activeTab, setActiveTab] = useState(1)

    const handleCheckIn = () => {
        setActiveTab(1)
    }
    const handleStaff = () => {
        setActiveTab(2)
    }
    const handleShare = () => {
        setActiveTab(3)
    }
    const handlePayment = () => {
        setActiveTab(4)
    }

    return (
        // <View style={styles.container}>
        //     <EText>AAAAAAAa</EText>
            <View style={styles.bottomTabNav}>
                <Tab
                    Icon={CheckInIcon} 
                    title="Check in"
                    activeTab={activeTab}
                    tabIndex={1}
                    onPress={handleCheckIn}
                />
                <Tab
                    Icon={StaffIcon} 
                    title="Staff"
                    activeTab={activeTab}
                    tabIndex={2}
                    onPress={handleStaff}
                />
                <View style={styles.mainTab}>
                    <View style={{...styles.mainTabBtn, zIndex: 10}}/>
                    <TouchableOpacity style={{...styles.mainTabBtn, zIndex: 20}}>
                        <Image source={require('../assets/images/emKey.png')} style={styles.mainTabBtnImg}/>
                        <ExpandIcon style={styles.expandIcon}/>
                    </TouchableOpacity>
                    
                </View>
                <Tab
                    Icon={ShareIcon} 
                    title="Share"
                    activeTab={activeTab}
                    tabIndex={3}
                    onPress={handleShare}
                />
                <Tab
                    Icon={PaymentIcon} 
                    title="Payment"
                    activeTab={activeTab}
                    tabIndex={4}
                    onPress={handlePayment}
                />

                
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
    },
    bottomTabNav: {
        borderWidth: 2,
        borderColor: COLOR.pink1,
        width: SCREEN_WIDTH,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12    ,
        height: 78,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    mainTab: {
        flexGrow: 2,
        width: (SCREEN_WIDTH - 2) / 3
    },
    tab: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: (SCREEN_WIDTH - 2) / 6,
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        color: COLOR.pink1
    },
    tabTitle: {
        fontSize: 12,
        marginTop: 5,
        color: COLOR.grey5
    },
    mainTabBtn: {
        width: (SCREEN_WIDTH - 2) / 3 * 0.8,
        height: (SCREEN_WIDTH - 2) / 3 * 0.8,
        position: 'absolute',
        bottom: 0,
        left: (SCREEN_WIDTH - 2) / 3 * 0.1,
        borderRadius: 100,
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    mainTabBtnImg: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        borderRadius: 200,
        position: 'relative',
        top: 5
    },
    expandIcon: {
        position: 'absolute',
        top: 0
    }
})

export default BottomTabNavBar