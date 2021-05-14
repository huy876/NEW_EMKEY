import React from 'react'
import { Dimensions, Platform } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const OS = Platform.OS

export {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    OS
}