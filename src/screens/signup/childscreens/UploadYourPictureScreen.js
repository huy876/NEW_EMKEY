import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

import ELayout from '../../../components/ELayout'
import EHeader from '../../../components/headers/EHeader'
import AddProfilePictureImage from '../../../assets/images/addProfilePicture.svg'
import { EText } from '../../../components/EFont'
import { GradientButton } from '../../../components/EButton'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { HEADER_TO_CONTENT_SPACE } from '../../../constants/SPACE'
import FONT from '../../../constants/FONT'

const UploadYourPictureScreen = ({navigation}) => {
    const [profilePictureSrc, setProfilePicturePath] = useState(null)

    const handlePickImage = () => {
        const option = {}
        launchCamera(option, res => {
            setProfilePicturePath(res.uri ? res.uri : null)
        })
    }

    const handleNext = () => {
        navigation.navigate('AccountVerificationScreen')
    }

    return (
        <ELayout style={styles.screen}>
            <EHeader
                screenTitle="Upload your Picture"
                devider={true}
                isBackButton={true}
            />
            {
                !profilePictureSrc && (
                    <TouchableOpacity style={styles.screenImageCont} onPress={handlePickImage}>
                        <AddProfilePictureImage />
                    </TouchableOpacity>
                )
            }
            {
                profilePictureSrc && (
                    <TouchableOpacity style={styles.screenImageCont} onPress={handlePickImage}>
                        <Image 
                            source={{uri: profilePictureSrc}}
                            style={styles.profilePicture}
                        />
                    </TouchableOpacity>
                )
            }
            <EText style={styles.text}>{
                profilePictureSrc ?
                'Click to change your Profile Picture' :
                'Add your Profile Picture'
            }</EText>
            <GradientButton 
                title="Next"
                style={styles.nextButton}
                onPress={handleNext}
            />
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    screenImageCont: {
        marginTop: HEADER_TO_CONTENT_SPACE
    },
    profilePicture: {
        width: 174,
        height: 174,
        borderRadius: 200
    },
    text: {
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        marginTop: 20,
        fontSize: 18
    },
    nextButton: {
        width: 165,
        marginTop: 20
    }
})

export default UploadYourPictureScreen