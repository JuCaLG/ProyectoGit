import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';
import { Picker } from '@react-native-community/picker';

/*
----------------------------------------------------------------------------------
    Importar codigo para peticion con el servidor
----------------------------------------------------------------------------------
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

function goToScreen(props, routeName) {
    props.navigation.navigate(routeName);
}

//-----------------------------------------------------------------------------------

function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}




export default function formPrueba(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)



    const [nombre, setNombre] = useState('')
    const [inputNombre, guardarNombre] = useState('')

    const [email, setEmail] = useState('')
    const [inputEmail, guardarEmail] = useState('')

    const [telefono, setTelefono] = useState('')
    const [inputTelefono, guardarTelefono] = useState('')


    const [password, setPassword] = useState('')
    const [inputPassword, guardarPassword] = useState('')

    const [passwordc, setPasswordC] = useState('')
    const [inputPasswordC, guardarPasswordC] = useState('')

    const [selectedValue, setSelectedValue] = useState("--- Asignar rol ---")

/*
----------------------------------------------------------------------------------
    Funcion Limpiar inputs
----------------------------------------------------------------------------------
*/
    function limpiarInputs() {

        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');

    }
    
//-----------------------------------------------------------------------------------

    //Se requiere que el metodo sea asincrono para asegurarse que se espere al resultado
    const crearUsuario = async () => {



        //Validar
        if (inputNombre == '' || inputEmail == '' || inputTelefono == '' || inputPassword == '' || inputPasswordC == '') {
            alert("Todos los campos son requeridos")
        } else if (inputPassword != inputPasswordC) {
            alert("No coincide la contraseña")
        } else {
            
          /*
          ----------------------------------------------------------------------------------
              Guardar usuario en base de datos
          ----------------------------------------------------------------------------------
          */
            
            //Objeto json
            var body =  { 
                "nombre": inputNombre,
                "email": inputEmail,
                "telefono": inputTelefono,
                "password": inputPassword,
                "id_rol": "Administrador",
            };

            /*
               peticion.insertar
               * tabla:  es el nombre de la tabla de la base de datos, procurar usar los nombres en singular y no plural
               * Objeto json
            */
            const resultado = await peticion.insertar("usuario",body);
            
            // await significa que esoera a que se termine de ejecutar el metodo
            
            //Imprime el resultado
            alert(resultado.status);
            limpiarInputs();
            
          //----------------------------------------------------------------------------------
            
        }
        //UseMutation
        //const[] = useMutation();
        //this.props.navigation.navigate('Principal');

    }



    const cerrarUsuario = () => {
        props.navigation.navigate('Home')


    }

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Usuarios</Text>


                <MyTextInput placeholder='Nombre' image='user'
                    value={inputNombre} onChangeText={nombre => guardarNombre(nombre)} />

                <MyTextInput placeholder='Email' image='envelope'
                    value={inputEmail} onChangeText={email => guardarEmail(email)} />

                <MyTextInput placeholder='Telefono' image='phone'
                    value={inputTelefono} onChangeText={telefono => guardarTelefono(telefono)} />

                <MyTextInput placeholder='Password' image='slack'
                    value={inputPassword} onChangeText={password => guardarPassword(password)} />

                <MyTextInput placeholder='Confirmar Password' image='slack'
                    value={inputPasswordC} onChangeText={passwordc => guardarPasswordC(passwordc)} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 20 }}>       Rol de Usuario         </Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Administrador" value="Administrador" />
                        <Picker.Item label="Coordinador" value="Coordinador" />
                        <Picker.Item label="Colaborador" value="Colaborador" />
                    </Picker>
                </View>




                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => crearUsuario()}>
                        <Text style={mainStyles.btntxt}>Guardar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarUsuario()}>
                        <Text style={mainStyles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )

    function goTosecreen(routeName) {
        props.navigation.navigate(routeName)

    }
}
