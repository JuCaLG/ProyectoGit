import React, {Component, useEffect, useState} from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image, ScrollView} from 'react-native'
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../../__PeticionServidor/peticiones.servidor');

/*
    Guardar Usiario de forma local
*/
const localStorage = require('../../__LocalStorage/usuario.localstorage');

export default function LoginScreen(props){

    const [sesion, setSesion] = useState('');

    const [hidePassword, setHidePassword] = useState(false)

    //Campos formulario
    const [inputUsuario , guardarUsuario] = useState ('')
    const [inputPassword , guardarPassword] = useState ('')

    const limpiarInput = () => {
        guardarUsuario('');
        guardarPassword('');
    }

    const iniciarSesion = async () => {
        try{
            if (inputUsuario ==''&& inputPassword==''){
                alert(await localStorage.removerUsuario());
                //alert("Todos los campos son obligatorios");
            }else if (inputUsuario =='') {
                alert("Falta llenar correo");
            }else if (inputPassword==''){
                alert("Falta llenar contraseña");
            }else {
                const resultado = await peticion.buscarEmail("usuario",inputUsuario);
                if  ( 
                        (
                            resultado!=null  && 
                            resultado.email.length!==0 && 
                            resultado.password.length!==0
                        ) &&
                        (
                            inputUsuario==resultado.email && 
                            inputPassword==resultado.password
                        )
                    ){
                    if(await localStorage.GuardarUsuario(resultado)){
                        goTosecreen('Principal');
                    }
                    else{
                        await localStorage.removerUsuario();
                        alert("Ocurrio un error inesperado");
                    }
                    limpiarInput();

                }else{
                    alert("Usuario o contraseña incorrectos");
                }
            } 
        }catch(error){
            
            console.log (error);
        }
    }

    const Sesion = async () => {
        setSesion(await localStorage.ObtenerUsuario());
    }

    function goTosecreen(routeName){
        console.log("LOGIN SCREEN")
        props.navigation.navigate(routeName);
        //console.log(id_usuario)
    }

    return(
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

            <Text>{(sesion)}</Text>

            <View style={mainStyles.btnMain}>
                <TouchableOpacity onPress={() => Sesion()}>
                    <Text style={mainStyles.btntxt}>Sesion</Text>
                </TouchableOpacity>
            </View>

            <View style={mainStyles.btnMain}>
                <TouchableOpacity onPress={() => goTosecreen('Principal')}>
                    <Text style={mainStyles.btntxt}>nueva pantalla</Text>
                </TouchableOpacity>
            </View>

            <View style={mainStyles.btnMain}>
                <TouchableOpacity onPress={() => iniciarSesion()}>
                    <Text style={mainStyles.btntxt}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            

        </ScrollView>
    )

}
