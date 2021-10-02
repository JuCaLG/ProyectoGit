import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image, ScrollView} from 'react-native';
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput';
import color from '@styles/colors';
import Cargando from "../../componentes/cargando";

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../../__PeticionServidor/peticiones.servidor');

/*
    Guardar Usiario de forma local
*/
const localStorage = require('../../__LocalStorage/usuario.localstorage');

export default function LoginScreen(props){

    /*Se ejecuta despues de actualizar el DOM*/
    useEffect(() => {
        //alert("Tu usuario es: "+sesion);
    });

    const [sesion, setSesion] = useState('');
    const [cargar,setCargar] = useState(false);
    //Campos formulario
    const [hidePassword, setHidePassword] = useState(false)
    const [inputUsuario , guardarUsuario] = useState ('')
    const [inputPassword , guardarPassword] = useState ('')

    const limpiarInput = () => {
        guardarUsuario('');
        guardarPassword('');
    }

    const removerSesion = async () => {
        await localStorage.removerUsuario();
    }

    const iniciarSesion = async () => {
        setCargar(true);
        const alerta = await validarDatos();
        setCargar(false);
        if(alerta==null){
            goTosecreen('Principal');
        }
        else{
            alert(alerta);
        }
    }

    const Sesion = async () => {
        setSesion(await localStorage.ObtenerUsuario());
    }

    function goTosecreen(routeName){
        props.navigation.navigate(routeName);
    }

    return(
        <View>
            {
                cargar==true? 
                (<Cargando setCargar={setCargar}/>):
                (<></>)
            }
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>

                <StatusBar backgroundColor={color.BLUE} translucent={true}/>
                <View style={[loginStyles.logo]}>
                    <Image source={require('@recursos/images/logosolecc.jpg')} style={{height:250, width:250}}/>
                </View>
                <MyTextInput keyboardType='email-address' placeholder='Correo' image='user'
                value={inputUsuario} onChangeText={email => guardarUsuario (email)}/>

                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
                secureTextEntry={!hidePassword}
                onPress={() => setHidePassword(!hidePassword)}
                value={inputPassword} onChangeText={texto => guardarPassword (texto)}/>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => iniciarSesion()}>
                        <Text style={mainStyles.btntxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>

                <Text>{(sesion)}</Text>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => Sesion()}>
                        <Text style={mainStyles.btntxt}>Ver Variable Sesion</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => removerSesion()}>
                        <Text style={mainStyles.btntxt}>Limpiar Variable Sesion</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => goTosecreen('Principal')}>
                        <Text style={mainStyles.btntxt}>nueva pantalla</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => setCargar(true)}>
                        <Text style={mainStyles.btntxt}>Pantalla Carga</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )

}
