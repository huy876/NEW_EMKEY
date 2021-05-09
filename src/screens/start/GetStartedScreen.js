import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import ELayout from '../../components/ELayout'
import { EText, H1 } from '../../components/EFont'
import GetStartedImage from '../../assets/images/getStarted.svg'
import { GradientButton, OutLineButton } from '../../components/EButton'

const GetStartedScreen = ({navigation}) => {
    return (
        <ELayout style={styles.screen}>
            <View style={styles.screenImageCont}>
                <GetStartedImage />
            </View>

            <View style={styles.textCont}>
                <H1 style={styles.title}>Let's Get Started</H1>
                
                <View style={styles.subTitleCont}>
                    <EText style={styles.subTitle}>Join Us Now And Enjoy</EText>
                    <EText style={styles.subTitle}>Credit Free Shipping</EText>
                    <EText style={styles.subTitle}>Instantly</EText>
                </View>
            </View>

            <View style={styles.buttonCont}>
                <GradientButton 
                    title="Create Account"
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SignUpScreen')
                    }}
                />
                <OutLineButton 
                    title="Login"
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('LoginScreen')
                    }}
                />
            </View>
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    screenImageCont: {
        height: 280,
        marginTop: 30
    },
    title: {
        marginBottom: 20
    },
    textCont: {
        height: 200,
    },
    subTitleCont: {
        alignItems: 'center'
    },
    subTitle: {
        marginBottom: 15
    },
    buttonCont: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    button: {
        marginTop: 18,
        width: 272   
    }

})

export default GetStartedScreen