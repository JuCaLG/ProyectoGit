import React from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

const TipoUsuariosVer = ({navigation,route}) => {

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const { id } = route.params;

    const Datos = () => {
        return (
            <Text>{ id }</Text>
        );
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}>{id}</Text>
                    <View>
                        {Datos()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={mainStyles.btntxt}>Volver</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("TipoUsuariosModificar", {"id":id})}>
                            <Text style={mainStyles.btntxt}>Modificar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default TipoUsuariosVer;