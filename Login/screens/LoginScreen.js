import React, {Component, useState} from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import AsyncStorage from '@react-native-community/async-storage'

const peticion = require('../../__PeticionServidor/peticiones.servidor');

export default function LoginScreen(props){
    const id_usuario = {
        clienteId:'20',
        totalpagar:'500'
    }

    const [hidePassword, setHidePassword] = useState(false)

    //Campos formulario
    const [inputUsuario , guardarUsuario] = useState ('')
    const [inputPassword , guardarPassword] = useState ('')

    const iniciarSesion = async () => {
        goTosecreen('Principal');
        /*
        try{
            await AsyncStorage.setItem('usuario', inputUsuario);
            guardarNombreStorage(inputUsuario);
            console.log({inputUsuario});
            await AsyncStorage.setItem('password', inputPassword);
            guardarPasswordStorage(inputPassword);
            console.log({inputPassword});
            console.log("Ya entro");

            if (inputUsuario ==''&& inputPassword==''){
                alert("Todos los campos son obligatorios");
                
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
                    goTosecreen('Principal')
                    guardarUsuario('')
                    guardarPassword('')
                    goTosecreen('Principal');
                }else{
                    alert("Usuario o contraseña incorrectos");
                }
            } 
        }catch(error){
            
            console.log (error);
        }
        */
    }

    function goTosecreen(routeName){
        console.log("LOGIN SCREEN")
        props.navigation.navigate(routeName,{id_usuario})
        //console.log(id_usuario)
    }

    return(
        <View style={[mainStyles.container, {padding:30}]}>
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
            

        </View>
    )

}
