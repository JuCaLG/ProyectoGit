import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formListadoProveedores(props, navigation) {

    useEffect(() => {
        const actualizarListaEffect = async () => {
            setListaProveedor(await peticion.loadTask("proveedor"));
        }
        actualizarListaEffect();
    },[]);

    const [listaProveedor, setListaProveedor] = useState([]);

    const crearProveedor = () => {
        props.navigation.navigate('Provedores')
    }

    const cerrarLista = () => {
        props.navigation.goBack();
        props.navigation.navigate('Home')
    }

    const DetalleLista = (id)=>{
        props.navigation.navigate('DetalleProveedor',{"id":id})
    }

    const actualizarLista = async () => {
        setListaProveedor(await peticion.loadTask("proveedor"));
    }

    const Listar = () => {
        if(JSON.stringify(listaProveedor)!== '[]'){
            return listaProveedor.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_prov} - {data.rfc_prov}</Text>
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