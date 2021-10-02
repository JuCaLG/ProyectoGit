import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image, ScrollView} from 'react-native';
import {ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native'
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput';
import color from '@styles/colors';

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

    const validarDatos = async () => {
        try{
            if (inputUsuario ==''&& inputPassword==''){
                return "Todos los campos son obligatorios";
            }else if (inputUsuario =='') {
                return "Falta llenar correo";
            }else if (inputPassword==''){
                return "Falta llenar contraseña";
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
                        return null;
                    }
                    else{
                        await removerSesion();
                        return "Ocurrio un error inesperado";
                    }
                    limpiarInput();

                }else{
                    return "Usuario o contraseña incorrectos";
                }
            } 
        }catch(error){
            return error;
        }
    }

    const Sesion = async () => {
        setSesion(await localStorage.ObtenerUsuario());
    }

    function goTosecreen(routeName){
        props.navigation.navigate(routeName);
    }
    const cargando = () => {
        if(cargar==true){
            return (
                <View style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    position: "absolute",
                    }}>
                    <View style={{
                            paddingVertical:12,
                            paddingHorizontal:20,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'rgba(0,0,0,0.6)',
                            borderRadius:6,
                            }}>
                        <ActivityIndicator animating={true} size="large" color="white"/>
                        <Text style={{
                                    marginLeft:20,
                                    fontSize:14,
                                    color:"white",
                                    }}>
                            Cargando ...
                        </Text>
                        <TouchableOpacity onPress={() => setCargar(false)}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        else{
            return (<></>);
        }
    }

    return(
        <View>
            {cargando()}
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
