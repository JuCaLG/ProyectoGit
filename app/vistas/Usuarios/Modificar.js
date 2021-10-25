import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const UsuariosModificar = ({navigation,route}) => {
    const [inputNombre, guardarNombre] = useState('')
    const [inputEmail, guardarEmail] = useState('')
    const [inputTelefono, guardarTelefono] = useState('')
    const [inputPassword, guardarPassword] = useState('')
    const [inputPasswordC, guardarPasswordC] = useState('')
    const [selectedValue, setSelectedValue] = useState("--- Asignar rol ---")

    const { obj } = route.params;
    const json = JSON.parse(obj);
    const id = json._id;

    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const modificar = async () => {
        var alerta = null;
        var validacion = (inputNombre != '' && inputEmail != '' && inputTelefono != '' && inputPassword != '' && inputPasswordC != '');
        //Validar
        if (validacion) {
            validacion = (inputPassword == inputPasswordC);
            if(validacion){
                var body =  { 
                    "nombre": inputNombre,
                    "email": inputEmail,
                    "telefono": inputTelefono,
                    "password": inputPassword,
                    "id_rol": selectedValue,
                };
                const resultado = await peticion.modificar("usuario",id,body);
                alerta =(resultado.status);
                limpiarInputs();
            }
            else{
                alerta =("No coincide la contraseña")
            }
        } 
        alert(alerta);
        navigation.goBack();
    }

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}>Modificar {id} </Text>


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
                        <TouchableOpacity onPress={() => modificar()}>
                            <Text style={mainStyles.btntxt}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={mainStyles.btntxt}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default UsuariosModificar;