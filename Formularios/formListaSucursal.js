import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');


export default function formListaSucursal(props, navigation) {

    const [listaSucursal, setListaSucursal] = useState([
        {
            "_id" : 1,
            "nombre": "nombre1",
            "rfc": "rfc1",
            "telefono": "tel1",
            "direccion": "dir1",
            "email": "email1",
        },
        {
            "_id" : 2,
            "nombre": "nombre2",
            "rfc": "rfc2",
            "telefono": "tel2",
            "direccion": "dir2",
            "email": "email2",
        },
    ]);

    const crearCategoria = ()=>{
        props.navigation.navigate('Sucursal')
    }

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('DetalleSucursal',{suc:suc})
    }

    const actualizarLista = async () => {
        setListaSucursal(await peticion.loadTask("sucursal"));
    }

    const Listar = () => {
        if(listaSucursal){
            return listaSucursal.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.nombre} - {data.rfc}</Text>
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
                <Text style={mainStyles.titleText}> Sucursales</Text>

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

                    <TouchableOpacity onPress={() => crearCategoria()}>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )

}