import React, { useState, useRef } from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'
import COLOR from '../../constants/COLOR'
import { EText } from '../EFont'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../EUtils'
import CheckInIcon from '../../assets/icons/check-in.svg'
import StaffIcon from '../../assets/icons/staff.svg'
import ShareIcon from '../../assets/icons/share.svg'
import PaymentIcon from '../../assets/icons/payment.svg'
import ExpandIcon from '../../assets/icons/expand.svg'
import BottomNavOptionsList from './BottomNavOptionsList'

export const ICON_SIZE = SCREEN_WIDTH/6 * 0.6

const Tab = (props) => {

    return (
        <TouchableOpacity style={styles.tab} onPress={() => props.onPress(props.tabIndex)}>
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
    //Tab index: 1-Checkin, 2-Staff, 3-Share, 4-Payment
    const [activeTab, setActiveTab] = useState(1)

    //Nav State: 1-Basic, 2-Expand Min, 3-Expand Max
    const [navState, setNavState] = useState(1)

    const botNavTranslate = useRef(new Animated.Value(0)).current
    const optionsListContTranslate = useRef(new Animated.Value(600)).current

    console.log(`optionsListContTranslate`, optionsListContTranslate)
    console.log(`botNavTramslate`, botNavTranslate)

    const hideBotNav = () => {
        Animated.sequence([
            Animated.timing(botNavTranslate, {
                toValue: 120,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(optionsListContTranslate, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                // delay: 500
            })
        ]).start()
    }

    const showBotNav = () => {
        Animated.sequence([
            Animated.timing(optionsListContTranslate, {
                toValue: 550,
                duration: 500,
                useNativeDriver: true,
                // delay: 500
            }),
            Animated.timing(botNavTranslate, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start()
    }

    const handlePressMainBtn = () => {
        switch (navState) {
            case 1: 
                hideBotNav()
                setNavState(2)
                return
            case 2: 
                showBotNav()
                setNavState(1)
                return
        }
    }

    const handlePressBotNavTab = (tabIndex) => {
        setActiveTab(tabIndex)
    }

    return (
        <>
            <Animated.View pointerEvents="box-none" style={[styles.botTabNavCont, {
                    transform: [
                        {translateY: botNavTranslate}
                    ]
                }]}>
                <View style={styles.bottomTabNav}>
                    <Tab
                        Icon={CheckInIcon} 
                        title="Check in"
                        activeTab={activeTab}
                        tabIndex={1}
                        onPress={handlePressBotNavTab}
                    />
                    <Tab
                        Icon={StaffIcon} 
                        title="Staff"
                        activeTab={activeTab}
                        tabIndex={2}
                        onPress={handlePressBotNavTab}
                    />
                    <View style={styles.mainTabSpace}>

                    </View>
                    <Tab
                        Icon={ShareIcon} 
                        title="Share"
                        activeTab={activeTab}
                        tabIndex={3}
                        onPress={handlePressBotNavTab}
                    />
                    <Tab
                        Icon={PaymentIcon} 
                        title="Payment"
                        activeTab={activeTab}
                        tabIndex={4}
                        onPress={handlePressBotNavTab}
                    />

                    
                </View>
                <View style={{...styles.mainTabBtn, zIndex: 10}}/>
                <TouchableOpacity style={{...styles.mainTabBtn, zIndex: 20}} onPress={handlePressMainBtn}>
                    <Image source={require('../../assets/images/emKey.png')} style={styles.mainTabBtnImg}/>
                    <TouchableOpacity style={styles.expandIconCont} >
                        <ExpandIcon style={styles.expandIcon}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.optionsListCont, {
                transform: [
                    {translateY: optionsListContTranslate}
                ]
            }]}>
                <BottomNavOptionsList style={styles.optionList}/>

                <View style={styles.hideOptionsListBtnCont} pointerEvents="box-none">
                    <TouchableOpacity onPress={handlePressMainBtn}>
                    <ExpandIcon style={styles.expandIcon}/>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
    },
    botTabNavCont: {
        flex: 1,
        zIndex: 40,
        position: 'absolute',
        bottom: 0,
        //set width and height to prevent click TouchAbleOpacity 
        //outsite the container when position absolute
        height: 150,
        width:500
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
        flexDirection: 'row',
        zIndex: 10,
        backgroundColor: COLOR.white
    },
    mainTabSpace: {
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
        bottom: 3,
        left: 11 / 30 * SCREEN_WIDTH + 1,
        borderRadius: 100,
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
        // shadow
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
        top: 5,
    },
    expandIconCont: {
        position: 'absolute',
        top: 0,
    },
    expandIcon: {
        
    },
    optionsListCont: {
        flex: 1
    },
    hideOptionsListBtnCont: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        position: 'absolute',
        bottom: 480,
        zIndex: 19
    }
})

export default BottomTabNavBar