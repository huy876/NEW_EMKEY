import React from 'react' 
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import NotificationItem from './NotificationItem'

const NotificationList = (props) => {

    const renderNotiItem = ({item}) => {
        console.log(`item`, item)
        return (
            <NotificationItem 
                noti={item}
            />
        )
    }

    return (
        <View style={styles.cont}>
            <FlatList 
                data={props.notis}
                renderItem={renderNotiItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        marginBottom: 50
    }
})

export default NotificationList