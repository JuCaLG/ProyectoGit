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

export default function formListadoProveedores(props, navigation) {

    const [listaProveedor, setListaProveedor] = useState([
        {
            "_id" : 1,
            "name_prov" : "prov1",
            "rfc_prov" : "rcf1",
            "dir_prov" : "dir1",
            "tel_prov" : "tel1",
            "email_prov" : "email1",
            "img_prov" : "img1"
        },
        {
            "_id" : 2,
            "name_prov" : "prov2",
            "rfc_prov" : "rcf2",
            "dir_prov" : "dir2",
            "tel_prov" : "tel2",
            "email_prov" : "email2",
            "img_prov" : "img2"
        },
    ]);

    const crearProveedor = () => {
        props.navigation.navigate('Provedores')
    }

    const cerrarLista = () => {
        props.navigation.navigate('Home')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('DetalleProveedor',{suc:suc})
    }

    const actualizarLista = async () => {
        setListaProveedor(await peticion.loadTask("proveedor"));
    }

    const Listar = () => {
        if(listaProveedor){
            return listaProveedor.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_prov} - {data.rfc_prov}</Text>
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

            <View style={[mainStyles.container, { padding: 20 }]}>
                <Text style={mainStyles.titleText}> Proveedores</Text>

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

                    <TouchableOpacity onPress={() => crearProveedor()}>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )

}