import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

const SucursalesModificar = ({navigation,route}) => {
    
    const { id } = route.params;

    const[nombre,guardarNombre]= useState('')
    const[rfc,guardarRFC]= useState('')
    const[direccion,guardarDireccion]= useState('')
    const[telefono,guardarTelefono]= useState('')
    const[email,guardarEmail]= useState('')

    function limpiarInputs() {
        guardarNombre('');
        guardarDireccion('');
        guardarEmail('');
        guardarRFC('');
        guardarTelefono('');
    }

    const modificar = () => {
        limpiarInputs();
        siguientePag("SucursalesListar");
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
                    <Text style={mainStyles.titleText}>Sucursales {id}</Text>
                
                    <MyTextInput placeholder='Nombre' image='user'
                    value={nombre} onChangeText={texto => guardarNombre (texto)} />

                    <MyTextInput placeholder='RFC' image='slack'
                    value={rfc} onChangeText={texto => guardarRFC (texto)} />

                    <MyTextInput placeholder='Dirección' image='home' 
                    value={direccion} onChangeText={texto => guardarDireccion (texto)}/>

                    <MyTextInput placeholder='Telefono' image='phone' 
                    value={telefono} onChangeText={texto => guardarTelefono (texto)}/>

                    <MyTextInput placeholder='Email' image='envelope' 
                    value={email} onChangeText={texto => guardarEmail (texto)}/>

                    <View style={mainStyles.btnMain}>
                    <TouchableOpacity  onPress={() => modificar()}>
                        <Text style={mainStyles.btntxt}  >Agregar</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                        <Text style={mainStyles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default SucursalesModificar;