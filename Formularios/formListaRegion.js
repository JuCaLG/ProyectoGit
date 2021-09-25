import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formListaRegion(props, navigation) {

    const [listaRegion, setListaRegion] = useState([
        {
            "_id" : 1,
            "name_region" : "region1",
        },
        {
            "_id" : 2,
            "name_region" : "region2",
        },
    ]);

    const crearRegiones = ()=>{
        props.navigation.navigate('Regiones')
    }

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('DetalleRegion',{suc:suc})
    }

    const actualizarLista = async () => {
        setListaRegion(await peticion.loadTask("region"));
    }

    const Listar = () => {
        if(listaRegion){
            return listaRegion.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_region}</Text>
                    </TouchableOpacity>
                );
            });
        }
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
                    {Listar()}
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Aceptar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => actualizarLista()}>
                        <Text style={mainStyles.btntxt}>Actualizar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => crearRegiones()}>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )

}