import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';
import { Picker } from '@react-native-community/picker';

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formPrueba(props, navigation) {

    const [inputNombre, guardarNombre] = useState('')
    const [inputEmail, guardarEmail] = useState('')
    const [inputTelefono, guardarTelefono] = useState('')
    const [inputPassword, guardarPassword] = useState('')
    const [inputPasswordC, guardarPasswordC] = useState('')
    const [selectedValue, setSelectedValue] = useState("--- Asignar rol ---")

    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const crearUsuario = async () => {
        //Validar
        if (inputNombre == '' || inputEmail == '' || inputTelefono == '' || inputPassword == '' || inputPasswordC == '') {
            alert("Todos los campos son requeridos")
        } else if (inputPassword != inputPasswordC) {
            alert("No coincide la contraseña")
        } else {
            var body =  { 
                "nombre": inputNombre,
                "email": inputEmail,
                "telefono": inputTelefono,
                "password": inputPassword,
                "id_rol": selectedValue,
            };

            const resultado = await peticion.insertar("usuario",body);
            
            alert(resultado.status);
            limpiarInputs();
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
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)
                            
                        }
                    >
                        <Picker.Item label="Administrador" value="Administrador" onValueChange={()=>imprime()} />
                        <Picker.Item label="Coordinador" value="Coordinador" onValueChange={()=>imprime()}/>
                        <Picker.Item label="Colaborador" value="Colaborador" onValueChange={()=>imprime()} />
                        
                    </Picker>

                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 20 }}>       Región         </Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue1, itemIndex1) => setSelectedValue(itemValue1)
                            
                        }
                    >
                        <Picker.Item label="Region 1" value="Region 1" onValueChange={()=>imprime()} />
                        <Picker.Item label="Region 2" value="Region 2" onValueChange={()=>imprime()}/>
                        <Picker.Item label="Region 3" value="Region 3" onValueChange={()=>imprime()} />
                        <Picker.Item label="Region 4" value="Region 4" onValueChange={()=>imprime()} />
                        <Picker.Item label="Region 5" value="Region 5" onValueChange={()=>imprime()} />
                        
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

}