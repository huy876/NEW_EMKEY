import React, { useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'
import ArrowBackIcon from '../../assets/icons/arrow-back.svg'
import COLOR from '../../constants/COLOR'
import { PADDING_1 } from '../../constants/SPACE'
import { EText } from '../EFont'
import { OS, SCREEN_WIDTH } from '../EUtils'
import { useNavigation } from '@react-navigation/native'
import FONT from '../../constants/FONT'

const EHeader = props => {
    let navigation = useNavigation()
    const styles = styleSheetFactory(props)
    
    const handleGoback = () => {
        navigation.goBack()
    }

    return (
        <View style={{...styles.headerCont, ...props.style}}>
            <TouchableOpacity style={styles.backButtonCont} onPress={navigation && handleGoback}>
                {props.isBackButton && <ArrowBackIcon style={{width: 20, height: 20}}/>}
            </TouchableOpacity>
            <View style={styles.screenTitleCont}>
                {props.screenTitle && <EText style={styles.screenTitle}>{props.screenTitle}</EText>}
            </View>
            
        </View>
    )
}

export const HEADER_HEIGHT = OS === 'android' ? 60 : 40

const styleSheetFactory = props => StyleSheet.create({
    headerCont: {
        width: SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        borderBottomColor: props.devider && COLOR.grey3,
        borderBottomWidth: props.devider && 1,
    },
    backButtonCont: {
        width: SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        position: 'absolute',
        paddingHorizontal: PADDING_1,
        justifyContent: 'center',
        zIndex: 10,
        backgroundColor: 'transparent'
    },
    screenTitleCont: {
        width: SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTitle: {
        fontSize: OS === 'android' ? 22 : 20,
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        fontWeight: '600'
    }

})

export default EHeader