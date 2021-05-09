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
import { GradientButton } from '../../../components/EButton'
import { SCREEN_WIDTH } from '../../../components/EUtils'
import { HEADER_TO_CONTENT_SPACE, MARGIN_1, PADDING_1 } from '../../../constants/SPACE'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const IdCardVerificationScreen = ({navigation}) => {
    const [idCardUri, setIdCardUri] = useState(null)

    const handlePickImage = () => {
        const option = {}
        launchCamera(option, res => {
            setIdCardUri(res.uri ? res.uri : null)
        })
    }

    const handleNext = () => {
        navigation.navigate('TakeASelfieScreen')
    }

    return (
        <ELayout style={styles.screen}>
            <EHeader
                screenTitle="ID Card Verification"
                devider={true}
                isBackButton={true}
            />
            <View style={styles.bodyCont}>
                <EText style={styles.text}>{
                    idCardUri ?
                    "Photo Preview" :
                    "Take a Pickture"
                }</EText>
                <TouchableOpacity style={styles.imageCont} onPress={handlePickImage}>
                    <Image 
                        source={
                            idCardUri ?
                            {uri: idCardUri} :
                            require('../../../assets/images/idCard.png')
                        }
                        style={styles.idCardImage}
                    />
                </TouchableOpacity>
                {idCardUri && (
                    <EText style={styles.warningMsg}>
                        Make sure that all the information on the document is visible and easy to Read 
                    </EText>
                )}
                <GradientButton 
                    title="Next"
                    style={styles.nextBtn}
                    onPress={handleNext}
                />
            </View>
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    bodyCont: {
        alignItems: 'center',
        marginTop: HEADER_TO_CONTENT_SPACE
    },
    text: {
        fontSize: 22,
        color: COLOR.black2,
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        marginBottom: MARGIN_1
    },
    imageCont: {

    },
    idCardImage: {
        width: SCREEN_WIDTH - PADDING_1 * 2,
        height: (SCREEN_WIDTH - PADDING_1 * 2) / 1.5,
        borderRadius: 30
    },
    warningMsg: {
        fontSize: 18,
        paddingHorizontal: PADDING_1,
        marginTop: MARGIN_1,
        color: COLOR.purple1
    },
    nextBtn: {
        marginTop: MARGIN_1,
        width: 165
    }
})

export default IdCardVerificationScreen