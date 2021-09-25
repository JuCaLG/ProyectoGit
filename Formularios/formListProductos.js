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

export default function formListProducstos(props, navigation) {

    const [listaProducto, setListaProducto] = useState([
        {
            "_id" : 1,
            "id_category": "cat",
            "id_proveedor": "prov",
            "name_prod": "name",
            "desc_prod": "desc",
            "qr_prod": "qr",
            "prod_id_usuario": "usu"
        },
        {
            "_id" : 2,
            "id_category": "cat2",
            "id_proveedor": "prov2",
            "name_prod": "name2",
            "desc_prod": "desc2",
            "qr_prod": "qr2",
            "prod_id_usuario": "usu2"
        },
    ]);

    const crearProducto = () => {
        props.navigation.navigate('NewProduc')
    }

    const cerrarLista = () => {
        props.navigation.navigate('Home')
    }

    const DetalleLista = (cat) => {
        props.navigation.navigate('ContenidoProductos', { cat: cat })
    }

    const actualizarLista = async () => {
        setListaProducto(await peticion.loadTask("producto"));
    }

    const Listar = () => {
        if(listaProducto){
            return listaProducto.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_prod}</Text>
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
                <Text style={mainStyles.titleText}> Productos</Text>

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
                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )

}