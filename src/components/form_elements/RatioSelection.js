import React from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import COLOR from '../../constants/COLOR'
import { MARGIN_1 } from '../../constants/SPACE'
import { EText } from '../EFont'

const Option = props => {
    return (
        <TouchableOpacity style={styles.optionCont} onPress={() => props.onValueChange(props.option)}>
            <View style={styles.ratioBtn}>
                {props.checked && <View style={styles.ratioCheck}/>}
            </View>
            <View >
                <EText style={styles.optionText}>{props.option}</EText>
            </View>
        </TouchableOpacity>
    )
}

const RatioSelection = props => {
    return (
        <View>
            {props.options.map((option, index) => (
                <Option 
                    option={option}
                    key={props.optionPrefix + index}
                    checked={props.value === option ? true : false}
                    onValueChange={props.onValueChange}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    optionCont: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: MARGIN_1
    },
    ratioBtn: {
        width: 26,
        height: 26,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: COLOR.grey4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    ratioCheck: {
        width: 16,
        height: 16,
        backgroundColor: COLOR.purple1,
        borderRadius: 100
    },
    optionText: {
        fontSize: 20,
        color: COLOR.black3,
        marginLeft: 10
    }
})

export default RatioSelection