import React, {useEffect, useState} from 'react';
import {Text, View, Button, StatusBar, Image, ScrollView} from 'react-native';
import {mainStyles,loginStyles} from '../../estilos/styles'
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import Cargando from "../../componentes/cargando";

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../../controladores/peticiones.servidor.js');

/*
    Guardar Usuario de forma local
*/
const localStorage = require('../../controladores/usuario.localstorage.js');

const Login = ({navigation}) => {

    useEffect(() => {
        Sesion();
    }, []);

    const [cargar, setCargar] = useState(true);
    const [hidePassword, setHidePassword] = useState(false);
    const [inputUsuario , guardarUsuario] = useState ('');
    const [inputPassword , guardarPassword] = useState ('');

    const limpiarInput = () => {
        guardarUsuario('');
        guardarPassword('');
    }

    const entrar = async () =>{
        setCargar(true);
        const validacion = (inputUsuario!="" && inputPassword!="");
        var alerta = null;
        if(validacion){
            limpiarInput();
            const resultado = await peticion.buscarEmail("usuario",inputUsuario);
            if(resultado!=null){
                if(resultado.password==inputPassword){
                    await localStorage.GuardarUsuario(resultado);
                    siguientePag("App");
                }
                else{
                    alerta = "Contraseña invalida";
                }
            }
            else{
                alerta = "Usuario Invalido";
            }
        }
        else{
            alerta = "Favor de llenar todos los campos";
        }

        if(alerta!=null){
            alert(alerta);
            setCargar(false);
        }
    }

    //--------------------------------------------------
    //SiguientePagina
    const siguientePag = () =>{
        navigation.reset({
            index:0,
            routes: [{ name: "App"}]
        });
    }

    const Sesion = async () => {
        const user = await localStorage.ObtenerUsuario();
        if(user!=null){
            siguientePag();
        }
        else{
        setCargar(false);
        }
    }

    return (
        <View>
            {(cargar)?
            (<Cargando />):
            (
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>

                <StatusBar backgroundColor={color.BLUE} translucent={true}/>
                <View style={[loginStyles.logo]}>
                    <Image source={require('../../imagenes/logo1.jpeg')} style={{height:250, width:250}}/>
                </View>
                <MyTextInput keyboardType='email-address' placeholder='Correo' image='user'
                value={inputUsuario} onChangeText={email => guardarUsuario (email)}/>

                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
                secureTextEntry={!hidePassword}
                onPress={() => setHidePassword(!hidePassword)}
                value={inputPassword} onChangeText={texto => guardarPassword (texto)}/>

                <Button style={mainStyles.btnMain} 
                    title="Iniciar Sesión"
                    onPress={() => entrar()}/>

            </ScrollView>
            )}
        </View>
    );
}

export default Login;