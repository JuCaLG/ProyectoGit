import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';

export default function formDetalleProducto(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')
    const{suc}=props.route.params;
    console.log(props.route.params.suc)

    const cerrarLista = ()=>{
        props.navigation.goBack();
        props.navigation.goBack();
    }

    const atrasLista = ()=>{
        props.navigation.goBack();
    }

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 20 }]}>
                <Text style={mainStyles.titleDetalleLista}> Detalle de Producto...</Text>
                <Text style={mainStyles.titleDetalleSuc}> {"ssssssssssss"}</Text>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity >
                        <Text style={mainStyles.btntxt}>Volver</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Cerrar</Text>
                    </TouchableOpacity>
                </View>

                 <View style={mainStyles.btnMas} >

                    <TouchableOpacity>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>

                


            </View>
        </ScrollView>
    )

    function goTosecreen(routeName) {
        props.navigation.navigate(routeName)

    }
}