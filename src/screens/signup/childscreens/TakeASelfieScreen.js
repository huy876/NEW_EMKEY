import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import ELayout from '../../../components/ELayout'
import { EText } from '../../../components/EFont'
import EHeader from '../../../components/headers/EHeader'
import COLOR from '../../../constants/COLOR'
import FONT from '../../../constants/FONT'
import { HEADER_TO_CONTENT_SPACE, MARGIN_1, PADDING_1 } from '../../../constants/SPACE'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { SCREEN_WIDTH } from '../../../components/EUtils'
import { GradientButton } from '../../../components/EButton'

const TakeASelfieScreen = ({navigation}) => {
    const [selfieProofUri, setSelfieProofUri] = useState(null)
    const styles = styleFactory(selfieProofUri ? true : false)

    const handlePickImage = () => {
        const option = {}
        launchCamera(option, res => {
            setSelfieProofUri(res.uri ? res.uri : null)
        })
    }

    const handleNext = () => {
        navigation.navigate('VerificationStatusScreen')
    }

    return (
        <ELayout style={styles.screen}>
            <EHeader
                screenTitle="Take a Selfie"
                devider={true}
                isBackButton={true}
            />
            <EText style={styles.textTitle}>Selfie with the Proof</EText>
            <EText style={styles.subTitle}>Please take a selfie with your document so that its's clearly visible and does not cover your face </EText>
            <TouchableOpacity style={styles.imageCont} onPress={handlePickImage}>
                <Image 
                    source={
                        selfieProofUri ?
                        {uri: selfieProofUri} :
                        require('../../../assets/images/face-recognition.png')
                    }
                    style={styles.selfieProofImage}
                />
            </TouchableOpacity>
            <GradientButton 
                title="Next"
                style={styles.nextBtn}
                onPress={handleNext}
            />
        </ELayout>
    )
}

const styleFactory = (isImageTaken) => StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 22,
        color: COLOR.black2,
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        marginBottom: MARGIN_1,
        marginTop: HEADER_TO_CONTENT_SPACE
    },
    subTitle: {
        fontSize: 18,
        paddingHorizontal: PADDING_1,
        color: COLOR.purple1
    },
    selfieProofImage: {
        width: SCREEN_WIDTH - PADDING_1 * 2,
        height: (SCREEN_WIDTH - PADDING_1 * 2) / 1.5,
        borderRadius: 30,
        marginVertical: MARGIN_1,
        resizeMode: isImageTaken ? 'cover' : 'contain'
    },
})

export default TakeASelfieScreen