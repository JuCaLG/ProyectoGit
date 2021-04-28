import { StyleSheet } from 'react-native'
import Colors from './colors'

const imageBackgroundStyle = StyleSheet.create({
    imge: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White
    }
})

export {
    imageBackgroundStyle
}