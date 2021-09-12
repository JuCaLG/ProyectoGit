import React, {Component, useState,useContext, useEffect} from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/colors'
import { UsuarioContext } from '@context/UsuarioContext'
import AsyncStorage from '@react-native-community/async-storage'

const peticion = require('../../__PeticionServidor/peticiones.servidor');

// CommonJS
const id_usuario ={
    clienteId:'20',
    totalpagar:'500'
}

export default function LoginScreen(props){
    const id_usuario ={
        clienteId:'20',
        totalpagar:'500'
    }
    
    

    const [login, loginAction] = useContext(UsuarioContext)

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [hidePassword, setHidePassword] = useState(false)

    //Campos formulario
    const [inputUsuario , guardarUsuario] = useState ('')
    const [inputPassword , guardarPassword] = useState ('')
    
    //recuperacion de los datos
    const [ nombreStorage, guardarNombreStorage] = useState('')
    const [ passwordStorage, guardarPasswordStorage] = useState('')

    useEffect (() => {
        obtenerDatosStorage ();
        obtenerDatosStorage1();
        

    }, []);

    
    const obtenerDatosStorage = async () => {

        try {
            
            const usuario =await AsyncStorage.getItem('usuario')
            guardarNombreStorage(usuario);
            console.log(nombreStorage);
            

        }catch(error){
            console.log(error);
        }

    }

    const obtenerDatosStorage1 = async () => {

        try {
            
            const password =await AsyncStorage.getItem('password')
            guardarPasswordStorage(password);
            console.log(passwordStorage);
            

        }catch(error){
            console.log(error);
        }
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
            <MyButton
            titulo='Iniciar Sesión'
            onPress={()=>iniciarSesion()}/>
            

        </View>
    )
    async function iniciarSesion  () {
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
        
    }

    function goTosecreen(routeName){
        console.log("LOGIN SCREEN")
        props.navigation.navigate(routeName,{id_usuario})
        
        //console.log(id_usuario)
        
    
    }
}
