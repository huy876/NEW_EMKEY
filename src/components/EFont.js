import React from 'react'
import { Text, StyleSheet } from 'react-native'
import COLORS from '../constants/COLOR'

export const EText = (props) => (
    <Text {...props} style={{...styles.text, ...props.style}}>
        {props.children}
    </Text>
)

export const H1 = (props) => (
    <Text {...props} style={{...styles.h1, ...props.style}}>
        {props.children}
    </Text>
)

export const ScreenTitleText = (props) => (
    <Text {...props} style={{...styles.screenTitle, ...props.style}}>
        {props.children}
    </Text>
)

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Segoe-UI',
        fontSize: 15,
        color: COLORS.black,
        fontWeight: 'normal'
    },
    h1: {
        fontFamily: 'Segoe-UI-Bold',
        fontSize: 30,
        color: COLORS.black,
    },
    screenTitle: {
        fontFamily: 'Segoe-UI',
        fontSize: 22,
        color: COLORS.black,
        fontWeight: 'bold'  
    }
})