import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import ELayout from '../../../components/ELayout'
import { EText } from '../../../components/EFont'
import EHeader from '../../../components/headers/EHeader'
import { SCREEN_WIDTH } from '../../../components/EUtils'
import { HEADER_TO_CONTENT_SPACE, MARGIN_1, PADDING_1 } from '../../../constants/SPACE'
import FONT from '../../../constants/FONT'
import { GradientButton } from '../../../components/EButton'
import COLOR from '../../../constants/COLOR'

const VerificationStatusScreen = ({navigation}) => {
    const handleProceed = () => {
        navigation.navigate('CheckInNavigation')
    }

    return (
        <ELayout style={styles.screen}>
            <EHeader
                screenTitle="Registration Complete"
                devider={true}
                isBackButton={true}
            />
            <View style={styles.screenImageCont}>
                <Image 
                    source={require('../../../assets/animation/successful.gif')}  
                    style={styles.screenImage}
                />
            </View>
            <EText style={styles.verificationMesg}>{`Your Account Verification \n has been Completed`}</EText>
            <GradientButton 
                title="Proceed"
                style={styles.proceedBtn}
                onPress={handleProceed}
            />
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    screenImageCont: {
        marginTop: HEADER_TO_CONTENT_SPACE,
        marginBottom: MARGIN_1,
        alignItems: 'center',
    },
    screenImage: {
        width: SCREEN_WIDTH - PADDING_1 * 2,
        height: (SCREEN_WIDTH - PADDING_1 * 2) / 1.4,
        resizeMode:'cover',
    },
    verificationMesg: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        color: COLOR.black2
    },
    proceedBtn: {
        width: 165,
        marginTop: MARGIN_1
    }
})

export default VerificationStatusScreen