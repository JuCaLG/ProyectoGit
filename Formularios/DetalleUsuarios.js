import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';

export default function DetalleUsuarios(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')
    const{suc}=props.route.params;
    console.log(props.route.params.suc)

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }
   
    const atrasLista = ()=>{
        props.navigation.navigate('ListUsuarios')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('formDetalleUsuario',{suc:suc})
    }

    





    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleDetalleLista}> Detalle de Usuario</Text>
                <Text style={mainStyles.titleDetalleSuc}> {suc}</Text>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => atrasLista()}>
                        <Text style={mainStyles.btntxt}>Volver Usuarios</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Cerrar</Text>
                    </TouchableOpacity>
                </View>

                


            </View>
        </ScrollView>
    )

    function goTosecreen(routeName) {
        props.navigation.navigate(routeName)

    }
}