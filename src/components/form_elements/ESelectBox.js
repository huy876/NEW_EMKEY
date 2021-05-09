import React, { useState } from 'react' 
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { EText } from '../EFont'
import SortDownIcon from '../../assets/icons/sort-down.svg'
import { SCREEN_WIDTH } from '../EUtils'
import { PADDING_1 } from '../../constants/SPACE'
import COLOR from '../../constants/COLOR'

const Option = (props) => {
    const handlePressOption = () => {
        props.onValueChange(props.option)
        props.toggleOptionList()
    }

    return (
        <TouchableOpacity style={optionStyles.optionCont} onPress={handlePressOption}>
            <EText style={optionStyles.option}>{props.option}</EText>
        </TouchableOpacity>
    )
}

const optionStyles = StyleSheet.create({
    optionCont: {
        height: 40,
        paddingHorizontal: PADDING_1,
        justifyContent: 'center'
    },
    option: {

    }
})

const ESelectBox = (props) => {
    const [showList, setShowList] = useState(false)
    const styles = styleFactory(props)

    const toggleOptionList = () => {
        setShowList(!showList)
    }

    const renderOptions = ({item}) => {
        return (
            <Option 
                option={item}
                onValueChange={props.onValueChange}
                toggleOptionList={toggleOptionList}
            />
        )
    }

    return (
        <View>
            <TouchableOpacity 
                style={{...styles.selectBox, ...props.style}} 
                onPress={toggleOptionList}
            >
                <EText style={props.mainTextStyle}>{props.value}</EText>
                <View>
                    <SortDownIcon 
                        style={{
                            ...styles.sortDownIcon,
                            transform: showList ? [
                                {rotate: '180deg'},
                                {translateY: -5}
                            ] : [
                                
                            ],
                        }}
                    />
                </View>
            </TouchableOpacity>
            {
                showList && (
                    <View style={styles.optionList}>
                        <FlatList 
                            data={props.options}
                            renderItem={renderOptions}
                            keyExtractor={(_, index) => props.optionPrefix + index}                        
                        />
                    </View>
                )
            }
        </View>
    )
}

const SELECT_BOX_HEIGHT = 60

const styleFactory = (props) => StyleSheet.create({
    selectBox: {
        width: SCREEN_WIDTH - PADDING_1 * 2,
        height: SELECT_BOX_HEIGHT,
        borderWidth: 1,
        borderColor: COLOR.black2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: PADDING_1
    },
    sortDownIcon: {
        width: 20, 
        height: 20,
    },
    optionList: {
        height: SELECT_BOX_HEIGHT * 5,
        width: SCREEN_WIDTH - PADDING_1 * 2,
        borderWidth: 1,
        position: 'absolute',
        top: SELECT_BOX_HEIGHT + 1,
        borderRadius: 5,
        backgroundColor: COLOR.white,
        zIndex: 10
    },
})



export default ESelectBox