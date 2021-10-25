import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

/*
    Guardar Usiario de forma local
*/
const localStorage = require('../../controladores/usuario.localstorage.js');

const PerfilVer = ({navigation}) => {

    //-------------------------------------------------
    const [user,setUser] = useState({
        "nombre": "...",
        "telefono": "...",
        "email": "...",
        "id_rol": "..."
    });

    useEffect(() => {
        Sesion();
    }, []);

    const Sesion = async () => {
        const json = JSON.parse(await localStorage.ObtenerUsuario());
        setUser(json);
    }

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Datos = () => {
        return (
            <>
                <Text>NOMBRE: { user["nombre"] }</Text>
                <Text>EMAIL: { user["email"] }</Text>
                <Text>TELEFONO: { user["telefono"] }</Text>
                <Text>ROL: { user["id_rol"] }</Text>
            </>
        );
    }
    
    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}>Mi Perfil</Text>
                    <View>
                        {Datos()}
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default PerfilVer;