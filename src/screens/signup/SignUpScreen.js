import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native'

import ELayout from '../../components/ELayout'
import { EText, H1 } from '../../components/EFont'
import EmKeyImage from '../../assets/images/emKey.svg'
import { GradientButton, TextButton } from '../../components/EButton'
import EInput from '../../components/form_elements/EInput'
import { SCREEN_WIDTH } from '../../components/EUtils'
import ECheckBox from '../../components/form_elements/ECheckBox'
import COLOR from '../../constants/COLOR'

const SignUpScreen = ({navigation}) => {
    const [isSelectPath, setIsSelectPath] = useState(true)
    const [isAgreeTerm, setIsAgreeTerm] = useState(false)
    
    const renderForm = () => (
        <View style={styles.inputForm}>
            <EInput 
                placeholder="Full Name"
            />
            <EInput 
                placeholder="Email"
            />
            <EInput 
                placeholder="Phone Number"
            />
            <EInput 
                placeholder="Password"
                secureTextEntry={true}  
            />
            <EInput 
                placeholder="Re-type Password"
                secureTextEntry={true}  
            />
            <View style={styles.askForTerm}>
                <ECheckBox 
                    size={15}
                    isChecked={isAgreeTerm}
                    setIsChecked={setIsAgreeTerm} 
                />
                <EText style={{marginLeft: 10}}>I agree with the terms and conditions</EText>
            </View>
            <GradientButton 
                title="Sign Up"
                style={styles.signUpBtn}
                onPress={handleSignUp}
            />
            <View style={styles.loginLead}>
                <EText>Already had an account?</EText>
                <TextButton 
                    title=" LOGIN"
                    style={{color: COLOR.primaryPink, fontWeight: 'bold'}}
                    onPress={() => navigation.navigate('LoginScreen')}
                />
            </View>
        </View>
    )

    const renderPath = () => (
        <View style={styles.pathCont}>
            <GradientButton 
                title="I am a Customer"
                isIcon={true}
                style={styles.pathButton}
                onPress={handleChoosePath}
                titleWidth={185}
            />
            <GradientButton 
                title="I am a Enterprise"
                isIcon={true}
                style={styles.pathButton}
                onPress={handleChoosePath}
                titleWidth={185}
            />
            <GradientButton 
                title="I am a Contractor"
                isIcon={true}
                style={styles.pathButton}
                onPress={handleChoosePath}
                titleWidth={185}
            />
        </View>
    )

    const handleChoosePath = () => {
        setIsSelectPath(false)
    }

    const handleSignUp = () => {
        navigation.navigate('UploadYourPictureScreen')
    }


    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
            <ELayout style={styles.screen}>
                <ScrollView style={styles.screenWrap}>
                    <View style={styles.screenImageCont}>
                        <EmKeyImage />
                    </View>

                    <View style={styles.textCont}>
                        <H1 style={styles.title}>Sign Up</H1>
                        
                        <View style={styles.subTitleCont}>
                            <EText style={styles.subTitle}>
                                {isSelectPath ? 'Choose your path' : 'Input your details'}
                            </EText>
                        </View>
                    </View>

                    {isSelectPath ? renderPath() : renderForm()}
                </ScrollView>
            </ELayout>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    screenWrap: {
        width: SCREEN_WIDTH
    },
    screenImageCont: {
        height: 200,
        marginTop: 30,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        marginBottom: 20
    },
    textCont: {
        alignItems: 'center',
        marginBottom: 20
    },
    subTitleCont: {
        alignItems: 'center'
    },
    subTitle: {
        marginBottom: 15
    },
    inputForm: {
        alignItems: 'center'
    },
    askForTerm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    signUpBtn: {
        marginTop: 20,
        width: SCREEN_WIDTH - 60
    },
    loginLead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    pathCont: {
        alignItems: 'center'
    },
    pathButton: {
        width: 269,
        marginBottom: 20
    }
})
export default SignUpScreen