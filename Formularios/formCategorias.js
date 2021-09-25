import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formCategorias(props) {

    const[inputCategoria,guardarCategoria]= useState('')

    function limpiarInputs() {
        guardarCategoria('');
    }

    const crearCategoria = async ()=>{
        //Validar
        if(inputCategoria ==''){
            alert("Llenado incompleto");
        }else{
            var body = { 
                "name_category": inputCategoria,
            };
            const resultado = await peticion.insertar("categoria",body);
            alert(resultado.status);
            limpiarInputs();
        }
    }

    const cerrarCategoria =() => {
        props.navigation.navigate('ListCategorias')
    }

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Categorias</Text>
                <MyTextInput placeholder='Nombre' image='sitemap'
                value={inputCategoria} onChangeText={categoria => guardarCategoria (categoria)} />

                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => crearCategoria()}>
                        <Text style={mainStyles.btntxt}>Guardar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarCategoria()}>
                        <Text style={mainStyles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )

}