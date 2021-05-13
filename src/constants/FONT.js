import { Platform } from 'react-native'

const os = Platform.OS

let FONT = {}

if (os === 'android') {
    FONT = {
        Segoe_UI: 'Segoe-UI',
        Segoe_UI_Semi_Bold: 'Segoe-UI-Semi-Bold',
        Segoe_UI_Bold: 'Segoe-UI-Bold',
    }
} else if (os == 'ios') {
    FONT = {
        Segoe_UI: 'SegoeUI',
        Segoe_UI_Semi_Bold: 'SegoeUI-Semibold',
        Segoe_UI_Bold: 'SegoeUI-Bold',
    }
}

export default FONT