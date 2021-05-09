import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from 'react-native'

import ELayout from '../../components/ELayout'
import { EText, H1 } from '../../components/EFont'
import EmKeyImage from '../../assets/images/emKey.svg'
import { GradientButton, TextButton } from '../../components/EButton'
import EInput from '../../components/form_elements/EInput'
import COLOR from '../../constants/COLOR'
import { SCREEN_WIDTH } from '../../components/EUtils'

const LoginScreen = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate('CheckInNavigation')
    }

    return (
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
            <ELayout style={styles.screen}>
                <View style={styles.screenImageCont}>
                    <EmKeyImage />
                </View>

                <View style={styles.textCont}>
                    <H1 style={styles.title}>Login</H1>
                    
                    <View style={styles.subTitleCont}>
                        <EText style={styles.subTitle}>Input your login details</EText>
                    </View>
                </View>

                <View style={styles.inputForm}>
                    <EInput 
                        placeholder="Email"
                    />
                    <EInput 
                        placeholder="Password"
                        secureTextEntry={true}  
                    />
                    <View style={styles.forgotPasswordCont}>
                        <TextButton 
                            title="Forgot Password?"
                            style={styles.forgotPassword}
                        />
                    </View>
                    <GradientButton 
                        title="Login"
                        onPress={handleLogin}
                        style={styles.loginButton}
                    />
                    <View style={styles.signUpLead}>
                        <EText>Don't have an account?</EText>
                        <TextButton 
                            title=" SIGN UP"
                            style={{color: COLOR.primaryPink, fontWeight: 'bold'}}
                            onPress={() => navigation.navigate('SignUpScreen')}
                        />
                    </View>
                </View>
            </ELayout>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
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
    forgotPasswordCont: {
        marginBottom: 20,
        width: SCREEN_WIDTH - 60,
        alignItems: 'flex-end'
    },
    forgotPassword: {
        color: COLOR.black1
    },
    loginButton: {
        width: SCREEN_WIDTH - 60
    },
    signUpLead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
})

export default LoginScreen