import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}

export default function formCategorias(props) {

    const [hidePassword, setHidePassword] = useState(false)

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
    
            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Categorias</Text>
                <MyTextInput placeholder='Nombre' image='sitemap' />
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        goToScreen(props, 'Login')}>
                        <Text style={mainStyles.btntxt}>Agregar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        goToScreen(props, 'Login')}>
                        <Text style={mainStyles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        </ScrollView>
    )
}