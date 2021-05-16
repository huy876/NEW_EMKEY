import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import ELayout from '../../../components/ELayout'
import MapView from 'react-native-maps'
import SideNavButton from '../../../components/sides/SideNavButton'
import { EText, H1 } from '../../../components/EFont'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../components/EUtils'
import COLOR from '../../../constants/COLOR'
import LinearGradient from 'react-native-linear-gradient'
import { MARGIN_1 } from '../../../constants/SPACE'
import { GradientButton } from '../../../components/EButton'
import LocationIcon from '../../../assets/icons/location.svg'
import TicketIcon from '../../../assets/icons/ticket.svg'

const StandQueuePopup = (props) => {
    const handleStandInQueue = () => {
        props.setQueueingState(2)
    }

    const handleCancelQueuing = () => {
        props.setQueueingState(0)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.popUpBg}>
                {props.queueingState === 1 ? (
                    <>
                        <View style={styles.businessInfoCont}>
                            <LinearGradient
                                colors={[COLOR.primaryPink, COLOR.purple2]}
                                style={styles.bsInfoHeaderCont}
                            >
                                <Image 
                                    style={styles.bsImage}
                                    source={require('../../../assets/dummy/dummyBusinessPicture.png')}
                                />
                                <H1 style={styles.bsName}>Business Name</H1>

                            </LinearGradient>
                            <View style={styles.bsItemInfoCont}>
                                <NumberBox number={14}/>
                                <EText style={styles.bsInfoText}>People in Queue</EText>
                            </View>
                            <View style={styles.bsItemInfoCont}>
                                <LocationIcon style={styles.infoIcon}/>
                                <EText style={styles.bsInfoText}>132D street 6 ,Newzealand</EText>
                            </View>
                            <View style={styles.bsItemInfoCont}>
                                <NumberBox number={24}/>
                                <EText style={styles.bsInfoText}>Minute in queue</EText>
                            </View>
                            <View style={styles.bsItemInfoCont}>
                                <TicketIcon style={styles.infoIcon}/>
                                <EText style={styles.bsInfoText}>132D street 6 ,Newzealand</EText>
                            </View>
                            
                        </View>
                        <GradientButton 
                                title="Stand In Queue"
                                style={{position: 'relative', top: -130}}
                                onPress={handleStandInQueue}
                        />
                    </>

                    
                ) : (
                    <>
                        <Image 
                            style={{
                                ...styles.bsImage, 
                                borderWidth: 2, 
                                borderColor: COLOR.purple3,
                                position: 'relative',
                                top: -40
                            }}
                            source={require('../../../assets/dummy/dummyBusinessPicture.png')}
                        />
                        <QueueingInfoBox 
                            infoText={'Queue number'}
                            infoValue={'4789'}
                            color={COLOR.purple3}
                        />
                        <QueueingInfoBox 
                            infoText={'Waiting time '}
                            infoValue={'8 min'}
                            color={COLOR.green1}
                        />
                        <GradientButton 
                            title="Cancel"
                            onPress={handleCancelQueuing}
                        />
                    </>
                )}
            </View>
        </View>
    )
}

const NumberBox = (props) => {
    return (
        <View
            style={{
                backgroundColor: COLOR.purple1,
                width: 30,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
                ...props.style
            }}
        >
            <EText style={{color: COLOR.white, fontWeight: 'bold'}}>{props.number}</EText>
        </View>
    )
}

const QueueingInfoBox = (props) => {
    return (
        <View style={{
            borderWidth: 3,
            borderColor: props.color,
            width: 320,
            height: 60,
            marginBottom: MARGIN_1,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <EText style={{
                color: COLOR.black1, 
                fontSize: 20, flex: 1,
                marginLeft: MARGIN_1
            }}>{props.infoText}</EText>
            <View style={{
                width: 90,
                backgroundColor: props.color,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <EText style={{color: COLOR.white, fontSize: 18, fontWeight: 'bold'}}>{props.infoValue}</EText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        borderWidth: 1,
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH
    },
    popUpBg: {
        position: 'absolute',
        bottom: 0,
        height: '45%',
        width: '100%',
        backgroundColor: COLOR.white,
        borderRadius: 30,
        alignItems: 'center'
    },
    businessInfoCont: {
        width:SCREEN_WIDTH * .7,
        height: 350,
        backgroundColor: COLOR.white,
        borderRadius: 20,
        position: 'relative',
        top: -175,
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
    bsInfoHeaderCont: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bsImage: {
        width: 100,
        height: 80,
        borderWidth: 1,
        borderRadius: 10
    },
    bsName: {
        color: COLOR.white,
        fontSize: 18,
        marginTop: 10
    },
    bsItemInfoCont: {
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: MARGIN_1

    },
    infoIcon: {
        color: COLOR.purple3,
        height: 24,
        width: 30
    },
    bsInfoText: {
        marginLeft: MARGIN_1,
        color: COLOR.blue2
    }
})

export default StandQueuePopup