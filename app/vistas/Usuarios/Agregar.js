import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const UsuariosAgregar = ({navigation}) => {

    useEffect(() => {
        const Roles = async () => {
            setRoles(await peticion.loadTask("tipousuario"))
        }
        Roles();
    }, []);

    const [roles, setRoles] = useState([]);

    const verRoles = () => {
        if(JSON.stringify(roles)!== '[]'){
            return roles.map((data) => {
                return (
                    <Picker.Item label={data.name_tipo} value={data.name_tipo} onValueChange={()=>imprime()} />
                );
            });
        }
        else{
            return (<></>);
        }
    }

    const [inputNombre, guardarNombre] = useState('');
    const [inputEmail, guardarEmail] = useState('');
    const [inputTelefono, guardarTelefono] = useState('');
    const [inputPassword, guardarPassword] = useState('');
    const [inputPasswordC, guardarPasswordC] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const crear = async () => {
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
                const resultado = await peticion.insertar("usuario",body);
                alerta = (resultado? resultado.status: "Sin Internet");
                limpiarInputs();
                siguientePag("UsuariosListar");
            }
            else{
                alerta =("No coincide la contraseña")
            }
        } 
        alert(alerta);
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
                    <Text style={mainStyles.titleText}> Crear Usuarios</Text>


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
                                
                            }>
                            <Picker.Item label="Asignar Rol" value="" onValueChange={()=>imprime()} />
                            {(verRoles())}
                        </Picker>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => crear()}>
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

export default UsuariosAgregar;