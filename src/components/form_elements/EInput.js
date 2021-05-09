import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { EText } from '../EFont'
import COLOR from '../../constants/COLOR'
import { SCREEN_WIDTH } from '../EUtils'
import { set } from 'react-native-reanimated'

const EInput = props => {
    const [outLine, setOutLine] = useState(COLOR.grey1)
    return (
        <TextInput 
            {...props} 
            style={{
                ...styles.input, 
                ...props.style,
                borderColor: outLine
            }} 
            onFocus={() => {
                setOutLine(COLOR.blue1)
            }}
            onBlur={() => {
                setOutLine(COLOR.grey1)
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 42,
        borderWidth: 1,
        borderRadius: 100, 
        width: SCREEN_WIDTH - 60,
        backgroundColor: COLOR.grey2,
        marginBottom: 18,
        paddingHorizontal: 15,
        fontSize: 15,
        fontFamily: 'Segoe-UI'
    }
})

export default EInput