import React from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

const TipoUsuariosModificar = ({navigation,route}) => {
    
    var { id } = route.params;

    function limpiarInputs() {
        guardarNombre('');
        guardarEmail('');
        guardarTelefono('');
        guardarPassword('');
        guardarPasswordC('');
    }

    const modificar = () => {
        limpiarInputs();
        siguientePag("TipoUsuariosListar");
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
            <Text>TipoUsuariosModificar</Text>
        </View>
    );
}

export default TipoUsuariosModificar;