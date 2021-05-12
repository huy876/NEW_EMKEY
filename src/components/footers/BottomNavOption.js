import React from 'react' 
import {
    View,
    StyleSheet
} from 'react-native'
import COLOR from '../../constants/COLOR'
import { EText } from '../EFont'
import { SCREEN_WIDTH } from '../EUtils'
import { ICON_SIZE } from './BottomTabNavBar'

const BottomNavOption = (props) => {
    return (
        <View style={styles.cont}>
            <props.Icon 
                style={styles.icon} 
            />
            <EText>{props.title}</EText>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        width: 120 ,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginTop: 10,
    },
    icon: {
        width: 52,
        height: 52
    }
})
export default BottomNavOption