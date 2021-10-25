import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const RegionesModificar = ({navigation,route}) => {

    const[inputRegion,guardarRegion]= useState('');

    const { obj } = route.params;
    const json = JSON.parse(obj);
    const id = json._id;

    function limpiarInputs() {
        guardarRegion('');
    }

    const modificar = async () => {
        var alerta = null;
        var validacion = (inputRegion !='');
        //Validar
        if(validacion){
            var body =  { 
                "name_region": inputRegion,
            };
            const resultado = await peticion.modificar("region",id,body);
            alerta =(resultado.status);
            limpiarInputs();
        }else{
            alerta =("Llenado incompleto")
        }
        alert(alerta);
        navigation.goBack();
    }

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }
    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />
        
                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}>Region {id}</Text>
                    <MyTextInput placeholder='Nombre' image='sitemap'
                    value={inputRegion} onChangeText={region => guardarRegion(region)} />


                    
                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => modificar()}>
                            <Text style={mainStyles.btntxt}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={mainStyles.btntxt}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
            </ScrollView>
        </View>
    );
}

export default RegionesModificar;