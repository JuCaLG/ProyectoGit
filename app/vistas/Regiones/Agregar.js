import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

const RegionesAgregar = ({navigation}) => {
    
    const[inputRegion,guardarRegion]= useState('');

    function limpiarInputs() {
        guardarRegion('');
    }

    const crear = () => {
        limpiarInputs();
        siguientePag("RegionesListar");
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
                    <Text style={mainStyles.titleText}>Region</Text>
                    <MyTextInput placeholder='Nombre' image='sitemap'
                    value={inputRegion} onChangeText={region => guardarRegion(region)} />


                    
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

export default RegionesAgregar;