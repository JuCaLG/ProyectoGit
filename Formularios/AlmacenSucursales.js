import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';







export default function AlmacenSucursales(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')

    const crearCategoria = ()=>{
        props.navigation.navigate('Sucursal')
    }

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('AlmacenIndividual',{suc:suc})
    }





    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleDetalleLista}> Elegir Sucursal</Text>

                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Veracruz")}>
                        <Text style={mainStyles.titleLista}>Veracruz</Text>
                    </TouchableOpacity>
                </View>

                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Torreon")}>
                        <Text style={mainStyles.titleLista}>Torreon</Text>
                    </TouchableOpacity>
                </View>
                <View >

                    <TouchableOpacity onPress={() => DetalleLista("Merida")}>
                        <Text style={mainStyles.titleLista}>Merida </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Cancun")}>
                        <Text style={mainStyles.titleLista}>Cancun</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Queretaro")}>
                        <Text style={mainStyles.titleLista}>Queretaro </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Tijuana")}>
                        <Text style={mainStyles.titleLista}>Tijuana</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Irapuato")}>
                        <Text style={mainStyles.titleLista}>Irapuato </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Ags")}>
                        <Text style={mainStyles.titleLista}>Ags </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => DetalleLista("Leon")}>
                        <Text style={mainStyles.titleLista}>Leon </Text>
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