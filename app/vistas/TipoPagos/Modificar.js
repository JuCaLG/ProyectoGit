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

const TipoPagoModificar = ({navigation,route}) => {
    
    const { obj } = route.params;
    const json = JSON.parse(obj);
    const id = json._id;

    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const modificar = async () => {
        var validacion = (nombre !='');
        //Validar
        if(validacion){
            var body = {
                "name_pay": nombre,
            };
            const resultado = await peticion.modificar("tipopago",id,body);
            alerta = (resultado? resultado.status: "Sin Internet");
            limpiarInputs();
            
        }else{
            alerta =("Todos los campos son requeridos");
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
            <Text>TipoPagoModificar</Text>
        </View>
    );
}

export default TipoPagoModificar;