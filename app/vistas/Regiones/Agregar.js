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

const RegionesAgregar = ({navigation}) => {
    
    const[inputRegion,guardarRegion]= useState('');

    function limpiarInputs() {
        guardarRegion('');
    }

    const crear = async () => {
        var alerta = null;
        var validacion = (inputRegion !='');
        //Validar
        if(validacion){
            var body =  { 
                "name_region": inputRegion,
            };
            const resultado = await peticion.insertar("region",body);
            alerta = (resultado? resultado.status: "Sin Internet");
            limpiarInputs();
        }else{
            alerta =("Llenado incompleto")
        }
        alert(alerta);
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
                    <Text style={mainStyles.titleText}>Region</Text>
                    <MyTextInput placeholder='Nombre' image='sitemap'
                    value={inputRegion} onChangeText={region => guardarRegion(region)} />


                    
                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => crear()}>
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

export default RegionesAgregar;