import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

const UsuariosListar = ({navigation}) => {

    const [listaUsuario,setListaUsuario] = useState([
        {
            "_id":1,
            "nombre": "nom1",
            "email":"email1"
        },
        {
            "_id":2,
            "nombre": "nom2",
            "email":"email2"
        },
    ]);

    const siguientePag = (Pagina, Parametro) =>{
        console.log(Parametro);
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Listar = () => {
        return listaUsuario.map((data) => {
            return (
                <TouchableOpacity key={data._id} onPress={() => siguientePag("UsuariosVer",{"id": data._id})}>
                    <Text style={mainStyles.titleLista}>{data.nombre} - {data.email}</Text>
                </TouchableOpacity>
            );
        });
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 40 }]}>
                    <Text style={mainStyles.titleText}> Usuarios </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("UsuariosAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default UsuariosListar;