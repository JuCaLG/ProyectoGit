import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

const SucursalesListar = ({navigation}) => {

    const [listaSucursal,setListaSucursal] = useState([
        {
            "_id":1,
            "nombre": "nom1",
            "rfc":"rfc1"
        },
        {
            "_id":2,
            "nombre": "nom2",
            "rfc":"rfc2"
        },
    ]);

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Listar = () => {
        return listaSucursal.map((data) => {
            return (
                <TouchableOpacity key={data._id} onPress={() => siguientePag("SucursalesVer",{"id": data._id})}>
                    <Text style={mainStyles.titleLista}>{data.nombre} - {data.rfc}</Text>
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
                    <Text style={mainStyles.titleText}> Sucursales </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("SucursalesAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default SucursalesListar;