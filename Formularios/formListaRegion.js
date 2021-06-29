import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';







export default function formListaRegion(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')

    const crearCategoria = ()=>{
        props.navigation.navigate('Regiones')
    }

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('DetalleRegion',{suc:suc})
    }





    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Regiones</Text>

                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Region 1")}>
                        <Text style={mainStyles.titleLista}>Region 1</Text>
                    </TouchableOpacity>
                </View>

                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Region 2")}>
                        <Text style={mainStyles.titleLista}>Region 2</Text>
                    </TouchableOpacity>
                </View>
                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Region 3")}>
                        <Text style={mainStyles.titleLista}>Region 3 </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Region 4")}>
                        <Text style={mainStyles.titleLista}>Region 4</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Region 5")}>
                        <Text style={mainStyles.titleLista}>Region 5 </Text>
                    </TouchableOpacity>
                </View>
               
                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Aceptar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMas} >

                    <TouchableOpacity onPress={() => crearCategoria()}>
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