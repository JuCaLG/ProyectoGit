import React from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const TipoPagoListar = ({navigation}) => {
    
    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const crear = async () => {
        var alerta = null;
        var validacion = (nombre !='');
        //Validar
        if(validacion){
            var body = {
                "name_pay": nombre,
            };
            const resultado = await peticion.insertar("tipopago",body);
            alerta =(resultado.status);
            limpiarInputs();
            
        }else{
            alerta =("Todos los campos son requeridos");
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
            <Text>TipoPagoListar</Text>
        </View>
    );
}

export default TipoPagoListar;