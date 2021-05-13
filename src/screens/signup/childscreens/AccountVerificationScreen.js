import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

import ELayout from '../../../components/ELayout'
import { EText } from '../../../components/EFont'
import EHeader from '../../../components/headers/EHeader'
import { HEADER_TO_CONTENT_SPACE, MARGIN_1, PADDING_1 } from '../../../constants/SPACE'
import ESelectBox from '../../../components/form_elements/ESelectBox'
import { SCREEN_WIDTH } from '../../../components/EUtils'
import COLOR from '../../../constants/COLOR'
import { GradientButton } from '../../../components/EButton'
import countries from '../../../assets/data/countries'
import RatioSelection from '../../../components/form_elements/RatioSelection'
import PlusCircleIcon from '../../../assets/icons/plus-circle.svg'
import FONT from '../../../constants/FONT'

const AccountVerificationScreen = ({navigation}) => {
    const [country, setCountry] = useState('New Zealand')
    const [idType, setIdType] = useState('ID Card')

    const handleSelectCountry = (country) => {
        setCountry(country)
    }

    const handleSelectIDType = idType => {
        setIdType(idType)
    }

    const handleAddOtherDoc = () => {
        setIdType('Other')
    }

    const handleNext = () => {
        navigation.navigate('IdCardVerificationScreen')
    }

    return (
        <ELayout style={styles.screen}>
            <EHeader
                screenTitle="Account Verification"
                devider={true}
                isBackButton={true}
            />
            <View style={styles.selectCountryCont}>
                <EText style={styles.topicText}>Select country</EText>
                <ESelectBox
                    style={styles.selectCountryBox} 
                    value={country}
                    onValueChange={handleSelectCountry}
                    mainTextStyle={styles.countryText}
                    options={countries}
                    optionPrefix="ctr"
                />
            </View>
            <View style={styles.selectIDTypeCont}>
                <EText style={styles.topicText}>Choose your ID type </EText>
                <RatioSelection 
                    options={[
                        'ID Card',
                        'Driving License',
                        'Passport'
                    ]}
                    value={idType}
                    onValueChange={handleSelectIDType}
                    optionPrefix="idtype"
                />
                <TouchableOpacity style={styles.otherDocCont} onPress={handleAddOtherDoc}>
                    <PlusCircleIcon 
                        style={{width: 27, height: 27, marginRight: 10}}
                    />
                    <EText style={styles.text}>Other Document</EText>
                </TouchableOpacity>
                {idType === 'Other' && <TextInput style={styles.inputOtherDoc}/>}
            </View>
            <View style={styles.nextBtnCont}>
                <GradientButton 
                    title="Next"
                    style={{width: 165, marginTop: MARGIN_1}}
                    onPress={handleNext}
                />
            </View>
        </ELayout>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: PADDING_1
    },
    selectCountryCont: {
        marginTop: HEADER_TO_CONTENT_SPACE
    },
    topicText: {
        fontSize: 22, 
        fontFamily: FONT.Segoe_UI_Semi_Bold,
        color: COLOR.black2,
        marginBottom: MARGIN_1
    },
    selectCountryBox: {
        marginBottom: 40,
        borderRadius: 5
    },
    countryText: {
        fontSize: 20,
        color: COLOR.black3
    },
    selectIDTypeCont: {

    },
    nextBtnCont: {
        alignItems: 'center'
    },
    otherDocCont: {
        flexDirection: 'row',
        marginLeft: 15
    },
    text: {
        fontSize: 20,
        color: COLOR.black3
    },
    inputOtherDoc: {
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: MARGIN_1,
        borderColor: COLOR.grey1,
        backgroundColor: COLOR.grey2,
        paddingHorizontal: PADDING_1,
        borderRadius: 5,
        fontSize: 20,
        color: COLOR.black3
    }
})

export default AccountVerificationScreen