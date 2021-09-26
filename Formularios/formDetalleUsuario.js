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
            const obj = await peticion.buscar("usuario",id);
            setUsuario(obj);
            setTitulo(obj.nombre);
        }
        actualizaEffect();
    },[]);

    var { id } = props.route.params;
    const [usuario, setUsuario] = useState({});
    const [titulo, setTitulo] = useState("Cargando...");

    const cerrarLista = ()=>{
        props.navigation.goBack();
        props.navigation.goBack();
    }

    const atrasLista = ()=>{
        props.navigation.goBack();
    }

    const Datos = () => {
        if(JSON.stringify(usuario)!== '{}'){
            return (
                    <TouchableOpacity>
                        <Text style={mainStyles.titleLista}>Nombre: {usuario.nombre}</Text>
                        <Text style={mainStyles.titleLista}>Email: {usuario.email}</Text>
                        <Text style={mainStyles.titleLista}>Telefono: {usuario.telefono}</Text>
                        <Text style={mainStyles.titleLista}>Rol: {usuario.id_rol}</Text>
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
                <Text style={mainStyles.titleText}>Usuario: {titulo}</Text>
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