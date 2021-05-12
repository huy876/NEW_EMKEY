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
        width: (SCREEN_WIDTH - 4) / 3 - 1 ,
        alignItems: 'center',
        justifyContent: 'center',
        height: ICON_SIZE * 1.1 + 30,
        marginTop: 10,
    },
    icon: {
        width: ICON_SIZE * 1.1,
        height: ICON_SIZE * 1.1
    }
})
export default BottomNavOption