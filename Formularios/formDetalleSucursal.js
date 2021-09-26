import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formListaSucursal(props) {

    useEffect(() => {
        const actualizaEffect = async () => {
            const obj = await peticion.buscar("sucursal",id);
            setObj(obj);
            setTitulo(obj.nombre);
        }
        actualizaEffect();
    },[]);

    var { id } = props.route.params;
    const [obj, setObj] = useState({});
    const [titulo, setTitulo] = useState("Cargando...");

    const cerrarLista = ()=>{
        props.navigation.goBack();
        props.navigation.goBack();
    }

    const atrasLista = ()=>{
        props.navigation.goBack();
    }

    const Datos = () => {
        if(JSON.stringify(obj)!== '{}'){
            return (
                    <TouchableOpacity>
                        <Text style={mainStyles.titleLista}>Nombre: {obj.nombre}</Text>
                        <Text style={mainStyles.titleLista}>RFC: {obj.rfc}</Text>
                        <Text style={mainStyles.titleLista}>Telefono: {obj.telefono}</Text>
                        <Text style={mainStyles.titleLista}>Dirección: {obj.direccion}</Text>
                        <Text style={mainStyles.titleLista}>Email: {obj.email}</Text>
                    </TouchableOpacity>
                );
        }
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>No se cargo la información</Text>
                    <Text style={mainStyles.titleLista}>Intentelo más tarde</Text>
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
                <Text style={mainStyles.titleText}>Sucursal: {titulo}</Text>
                <View>
                    {Datos()}
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => atrasLista()}>
                        <Text style={mainStyles.btntxt}>Volver</Text>
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

}