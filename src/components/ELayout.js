import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import COLOR from '../constants/COLOR'
import { SCREEN_HEIGHT } from './EUtils'
import { HEADER_HEIGHT } from './headers/EHeader'

const ELayout = (props) => {
    return (
        <View {...props} style={{...styles.layout, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: COLOR.white,
    }
})

export default ELayout