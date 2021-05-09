import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { EText } from './EFont'
import LinearGradient from 'react-native-linear-gradient'
import COLOR from '../constants/COLOR'
import ArrowCircleRight from  '../assets/icons/arrow-circle-right.svg'

export const GradientButton = (props) => {
    
    return (
        <TouchableOpacity {...props} style={{...styles.gradientButton, ...props.style}}>
            <LinearGradient 
                colors={[COLOR.primaryPink, COLOR.primaryPurple]}
                style={styles.linearGradient}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            >
                <EText 
                    style={
                        props.titleWidth ? 
                        {width: props.titleWidth, ...styles.gradientButtonText} :
                        styles.gradientButtonText
                    }
                >
                    {props.title}
                </EText>
                {props.isIcon && (
                    <ArrowCircleRight style={{width: 20, height: 20, marginLeft: 10}}/>
                )}
            </LinearGradient>
        </TouchableOpacity>
    )
}

export const OutLineButton = props => {
    return (
        <TouchableOpacity {...props} style={{...styles.outLineButton, ...props.style}}>
            <EText style={styles.outLineButtonText}>{props.title}</EText>
        </TouchableOpacity>
    )
}

export const TextButton = ({onPress, ...rest}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <EText {...rest} >{rest.title}</EText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gradientButton: {
        width: 200,
        height: 44,
        borderRadius: 100
    },
    linearGradient: {
        borderRadius: 100,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradientButtonText: {
        fontFamily: 'Segoe-UI-Bold',
        color: COLOR.white,
        fontSize: 22,
    },
    outLineButton: {
        width: 200,
        height: 42,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLOR.blue1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outLineButtonText: {
        fontSize: 15,
        color: COLOR.blue1
    }   
})