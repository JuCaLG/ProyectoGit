import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '@styles/styles';
import color from '@styles/colors';

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formListProducstos(props, navigation) {

    useEffect(() => {
        const actualizarListaEffect = async () => {
            setListaProducto(await peticion.loadTask("producto"));
        }
        actualizarListaEffect();
    },[]);

    const [listaProducto, setListaProducto] = useState([]);

    const crearProducto = () => {
        //props.navigation.navigate('NewProduc')
    }

    const cerrarLista = () => {
        props.navigation.goBack();
        props.navigation.navigate('Home')
    }

    const DetalleLista = (id) => {
        props.navigation.navigate('ContenidoProductos', { "id": id })
    }

    const actualizarLista = async () => {
        setListaProducto(await peticion.loadTask("producto"));
    }

    const Listar = () => {
        if(JSON.stringify(listaProducto)!== '[]'){
            return listaProducto.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_prod}</Text>
                    </TouchableOpacity>
                );
            });
        }
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>No hay datos registrados</Text>
                </TouchableOpacity>
            );
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
                    <TouchableOpacity onPress={() => crearProducto()}>
                        <Text style={mainStyles.btntxt}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )

}