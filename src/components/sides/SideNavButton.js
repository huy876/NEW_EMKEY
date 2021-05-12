import React, { useRef, useState } from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native'
import COLOR from '../../constants/COLOR'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import EMLogo from '../../assets/icons/emLogo.svg'
import { PADDING_1 } from '../../constants/SPACE'
import DummyProfilePic from '../../assets/dummy/profilePic.svg'

const SideNavButton = (props) => {
    const [sideNavBtnState, setSideBtnState] = useState(0) //0-minus  1-expand
    const sideNavPosition = useRef(new Animated.Value(110)).current
    const profileBtnPosition = useRef(new Animated.Value(-110)).current

    const expandSideBtn = () => {
        Animated.parallel([
            Animated.timing(sideNavPosition, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(profileBtnPosition, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start()
    }

    const minusSideBtn = () => {
        Animated.parallel([
            Animated.timing(sideNavPosition, {
                toValue: 110,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(profileBtnPosition, {
                toValue: -110,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start()
    }

    const toggleSideBtn = () => {
        if (sideNavBtnState == 0) {
            expandSideBtn()
            setSideBtnState(1)
        } else {
            minusSideBtn()
            setSideBtnState(0)
        }
    }

    return (
        <View style={styles.cont} pointerEvents="box-none">
            <Animated.View style={[styles.sideBtn, {
                transform: [
                    {translateX: sideNavPosition}
                ]
            }]}>
                <TouchableOpacity onPress={toggleSideBtn}>
                    <ArrowLeftIcon style={[styles.arrowLeftIcon, {
                        transform: sideNavBtnState === 0 ? [] : [
                            {rotate: '180deg'},
                            {translateX: -5}
                        ]
                    }]}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('NotificationScreen')}
                >
                    <EMLogo style={styles.emLogo}/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[{width: 80}, {
                transform: [
                    {translateX: profileBtnPosition}
                ]
            }]}>
                <TouchableOpacity 
                    style={styles.profileBtn}
                    onPress={() => {
                        props.navigation.openDrawer()
                    }}
                >
                    <DummyProfilePic />
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        height: 80,
        right: 0,
        top: 60,
    },
    sideBtn: {
        width: 150,
        height: 80,
        backgroundColor: COLOR.pink2,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        right: 0
    },
    arrowLeftIcon: {
        color: COLOR.white,
        height: 28,
        width: 18,
        marginLeft: 10
    },
    emLogo: {
        height: 40,
        width: 40,
        color: COLOR.white,
        marginLeft: 30
    },
    profileBtn: {
        width: 80,
        height: 80,
        marginLeft: PADDING_1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SideNavButton