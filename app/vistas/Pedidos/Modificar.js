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

const PedidosModificar = ({navigation,route}) => {
    
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
        var alerta = null;
        var validacion = ( nombre!="" && precio!="");
        //Validar
        if(validacion){
            var body = {
                "amount_prod": nombre,
                "price_v": precio,
            };
            const resultado = await peticion.modificar("sucursal",id,body);
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
            <Text>PedidosModificar</Text>
        </View>
    );
}

export default PedidosModificar;