import React, {Component, useState,useContext} from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import {mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/colors'
import { UsuarioContext } from '@context/UsuarioContext'

export default function LoginScreen(props){

    const [login, loginAction] = useContext(UsuarioContext)

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [hidePassword, setHidePassword] = useState(false)

    return(
        <View style={[mainStyles.container, {padding:30}]}>
            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            <View style={[loginStyles.logo]}>
                <Image source={require('@recursos/images/logo.jpg')} style={{height:250, width:250}}/>
            </View>
            <MyTextInput keyboardType='email-address' placeholder='Correo' image='user'
            value={email} onChangeText={(email)=>setEmail(email)}/>
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
            secureTextEntry={hidePassword}
            onPress={() => setHidePassword(!hidePassword)}
            value={password} onChangeText={(password)=>setPassword(password)}/>
            <MyButton
            titulo='Iniciar Sesión'
            onPress={()=>iniciarSesion()}/>
            

        </View>
    )
    function iniciarSesion(){
        loginAction({
            tyoe:'sign', data:{
                email, password
            }
        })
        goTosecreen('Principal')
    }

    function goTosecreen(routeName){
        props.navigation.navigate(routeName)
    
    }
}
