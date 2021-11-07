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

const TipoUsuariosAgregar = ({navigation}) => {
    
    function limpiarInputs() {
        guardarNombre('');
    }

    const crear = async () => {
        var alerta = null;
        var validacion = (nombre !='');
        //Validar
        if(validacion){
            var body = {
                "name_tipo": nombre,
            };
            const resultado = await peticion.insertar("tipousuario",body);
            alerta = (resultado? resultado.status: "Sin Internet");
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
            <Text>TipoUsuariosAgregar</Text>
        </View>
    );
}

export default TipoUsuariosAgregar;