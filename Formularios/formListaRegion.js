import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formListaRegion(props, navigation) {

    useEffect(() => {
        const actualizarListaEffect = async () => {
            setListaRegion(await peticion.loadTask("region"));
        }
        actualizarListaEffect();
    },[]);

    const [listaRegion, setListaRegion] = useState([]);

    const crearRegiones = ()=>{
        props.navigation.navigate('Regiones')
    }

    const cerrarLista = ()=>{
        props.navigation.goBack();
        props.navigation.navigate('Home')
    }

    const DetalleLista = (id)=>{
        props.navigation.navigate('DetalleRegion',{"id":id})
    }

    const actualizarLista = async () => {
        setListaRegion(await peticion.loadTask("region"));
    }

    const Listar = () => {
        if(JSON.stringify(listaRegion)!== '[]'){
            return listaRegion.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => DetalleLista(data._id)}>
                        <Text style={mainStyles.titleLista}>{data.name_region}</Text>
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