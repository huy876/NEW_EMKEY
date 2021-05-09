import React, { useState } from 'react'
import {
    View,
    Pressable,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import BoxIcon from '../../assets/icons/square.svg'
import CheckIcon from '../../assets/icons/check.svg'
import COLOR from '../../constants/COLOR'

const ECheckBox = (props) => {
    const styles = styleSheetFactory(props)

    const toggleChecked = () => {
        props.setIsChecked(!props.isChecked)
    }

    return (
        <TouchableOpacity onPress={toggleChecked}>
            <View style={styles.checkBox}>
                <BoxIcon style={styles.box}/>
                {props.isChecked && <CheckIcon fill={COLOR.pink1} style={styles.check}/>}
            </View>
        </TouchableOpacity>
    )
}

const styleSheetFactory = props => StyleSheet.create({
    checkBox: {
        width: props.size,
        height: props.size
    },
    box: {
        width: props.size,
        height: props.size,
        position: 'absolute'
    },
    check: {
        width: props.size -2,
        height: props.size -2,
        position: 'absolute',
        top: 1,
        left: 1,
    }
})

export default ECheckBox