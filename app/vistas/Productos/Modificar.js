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

const ProductosModificar = ({navigation,route}) => {

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
        var validacion = (nombre !=''&& categoria!=''&& proveedor!='')
        //Validar
        if(validacion){
            var body = {
                "id_category": categoria,
                "id_proveedor": proveedor,
                "name_prod": nombre,
                "desc_prod": 0,
                "qr_prod": "S/N",
                "prod_id_usuario": "N/A",
                };
            const resultado = await peticion.modificar("producto",id,body);
            alerta =(resultado.status);
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
            <Text>ProductosModificar</Text>
            <Button title="ProductosVer"
                onPress={() => siguientePag()}></Button>
        </View>
    );
}

export default ProductosModificar;