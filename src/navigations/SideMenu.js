import React from 'react' 
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { EText, H1 } from '../components/EFont'
import COLOR from '../constants/COLOR'
import { MARGIN_1 } from '../constants/SPACE'

const SideMenu = props => {
    return (
        <View style={styles.cont}>
            <LinearGradient
                colors={[COLOR.primaryPink, COLOR.primaryPurple]}
                style={styles.linearGradient}
            >
                <Image 
                    style={styles.profilePic}
                    source={require('../assets/dummy/dummyProfilePic.png')}
                />
                <View style={styles.userInfo}>
                    <H1 style={styles.userName}>John Wick</H1>
                    <EText style={styles.userDetail}>@chatmaxon</EText>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {

    },
    linearGradient: {
        height: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        width: 90,
        height: 90,
        borderRadius: 15,
        marginRight: MARGIN_1
    },
    userName: {
        color: COLOR.white,
        fontSize: 20,
    },
    userDetail: {
        color: COLOR.white,
        marginTop: 5
    }
})

export default SideMenu