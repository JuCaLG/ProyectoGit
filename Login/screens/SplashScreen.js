import React, { Component, useContext, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle } from '@styles/General'
import { getUsuario } from '@storage/UsuarioAsyncStorage'
import { UsuarioContext } from '@context/UsuarioContext'


export default function SplashScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)

    useEffect(() => {
        fetchSession(loginAction)
    }, [])

    return (
        <View style={imageBackgroundStyle.imge}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
            <Animatable.Image
                animation="pulse"
                easing="ease-in-out"
                iterationCount="infinite"
                style={{
                    width: 200,
                    height: 200,
                    margin: 100,
                }}
                source={require('@recursos/images/logo.jpg')}
            />
        </View>
    )

    async function fetchSession(loginAction) {
        const response = await getUsuario()

        console.log(response)

        if (response == null) {
            setTimeout(() => {
                goToScreen('Login')
            }, 3000)
            return
        }
        loginAction({type:'sing-in', data:response})
        setTimeout(() => {
            goToScreen('Principal')
        }, 500)
    }

    function goToScreen(routeName) {
        props.navigation.replace(routeName)
    }

}