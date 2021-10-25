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

const PedidosAgregar = ({navigation}) => {
    
    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const crear = async () => {
        var alerta = null;
        var validacion = ( nombre!="" && precio!="");
        //Validar
        if(validacion){
            var body = {
                "amount_prod": nombre,
                "price_v": precio,
            };
            const resultado = await peticion.insertar("sucursal",body);
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
            <Text>PedidosAgregar</Text>
        </View>
    );
}

export default PedidosAgregar;