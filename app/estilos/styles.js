import { StyleSheet } from 'react-native'
import color from './colors';

//Estilos para MainScreen
const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 28,
        marginTop: 20,
        color: color.BLUE,
        fontFamily: "Poppins-SemiBold"
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.BLUE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
    
})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 60,
    },
})

const drawableStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    bgContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0'
    },

    userContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    userImagen: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    camaraContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    camaraIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 15,
        bottom: 3
    },

    userNombre: {
        marginVertical: 10,
    },

    userTitulo: {
        textAlign: 'center',
        fontFamily: 'Poppins-Black',
        fontWeight:'bold',
        fontSize: 16
    },

    userSubTitulo: {
        textAlign: 'center',
        fontFamily: 'Poppins-BoldItalic',
        fontSize: 11,
        color: '#377bff',
        paddingVertical: 5,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginVertical: 15,
    },

    iconoContainer: {
        flex: 1.5,
        justifyContent: 'center'
    },

    tituloContainer: {
        flex: 8.5,
        justifyContent: 'center'
    },

    tituloTxt: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
    },
    difuminado:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    fondoImagen:{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
});

export { mainStyles, splashStyles, loginStyles, registroStyles, drawableStyles }