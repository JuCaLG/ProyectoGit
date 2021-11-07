import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { mainStyles, loginStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const ProveedoresModificar = ({navigation,route}) => {
    
    const { obj } = route.params;
    const json = JSON.parse(obj);
    const id = json._id;
    const[inputNombre,guardarNombre]= useState(json.name_prov);
    const[inputRFC,guardarRFC]= useState(json.rfc_prov)
    const[inputDireccion,guardarDireccion]= useState(json.dir_prov);
    const[inputTelefono,guardarTelefono]= useState(json.tel_prov);
    const[inputEmail,guardarEmail]= useState(json.email_prov);

    function limpiarInputs() {
        guardarNombre('');
        guardarDireccion('');
        guardarEmail('');
        guardarRFC('');
        guardarTelefono('');
    }

    const modificar = async () => {
        var alerta = null;
        var validacion = (inputNombre !=''|| inputRFC!=''|| inputDireccion!=''|| inputTelefono !=''|| inputEmail!='')
        //Validar
        if(validacion){
            var body = {
                "name_prov": inputNombre,
                "rfc_prov": inputRFC,
                "dir_prov": inputDireccion,
                "tel_prov": inputTelefono,
                "email_prov": inputEmail,
                "img_prov": "",
            };
            const resultado = await peticion.modificar("proveedor",_id,body);
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
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}> Provedores {id}</Text>
                    <MyTextInput placeholder='Nombre' image='user'
                    value={inputNombre} onChangeText={nombre => guardarNombre (nombre)} />

                    <MyTextInput placeholder='RFC' image='slack'
                    value={inputRFC} onChangeText={rfc => guardarRFC (rfc)} />

                    <MyTextInput placeholder='Dirección' image='home' 
                    value={inputDireccion} onChangeText={direccion => guardarDireccion (direccion)}/>

                    <MyTextInput placeholder='Telefono' image='phone' 
                    value={inputTelefono} onChangeText={telefono => guardarTelefono (telefono)}/>

                    <MyTextInput placeholder='Email' image='envelope' 
                    value={inputEmail} onChangeText={email => guardarEmail (email)}/>

                    <Text style={{fontWeight: 'bold',fontSize: 18,marginTop: 20}}>Foto</Text>
                    <View style={[loginStyles.logo]}>
                    <Image source={require('../../imagenes/camara.png')} style={{height:250, width:250}}/>
                    </View>

                    <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => modificar()}>
                        <Text style={mainStyles.btntxt}>Agregar</Text>
                    </TouchableOpacity>
                    </View>

                    <Text>{}</Text>

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

export default ProveedoresModificar;