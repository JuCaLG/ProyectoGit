import React, {useEffect, useState} from 'react';
import {Text, View, Button, StatusBar, Image, ScrollView} from 'react-native';
import {mainStyles,loginStyles} from '../../estilos/styles'
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import Cargando from "../../componentes/cargando";

const Login = ({navigation}) => {

    console.log("Login");

    useEffect(() => {
        if(user!=null){
            navigation.reset({
                index:0,
                routes: [{ name: "App"}]
            });
        }
    });

    const [user,setUser] = useState(null);
    
    //Campos formulario
    const [hidePassword, setHidePassword] = useState(false)
    const [inputUsuario , guardarUsuario] = useState ('')
    const [inputPassword , guardarPassword] = useState ('')

    const limpiarInput = () => {
        guardarUsuario('');
        guardarPassword('');
    }

    const entrar = () =>{
        
        limpiarInput();
        setUser("Usuario");
    }

    return (
        <View>
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

                <Text>{(user)}</Text>

                <Button style={mainStyles.btnMain} 
                    title="Iniciar Sesión"
                    onPress={() => entrar()}/>

            </ScrollView>
        </View>
    );
}

export default Login;