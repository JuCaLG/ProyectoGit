import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import color from '../../estilos/colors';
import {mainStyles} from '../../estilos/styles';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const ProveedoresListar = ({navigation}) => {

    const [listaProveedor,setListaProveedor] = useState([]);

    useEffect(() => {
        const actualizarListaEffect = async () => {
            setListaProveedor(await peticion.loadTask("proveedor"));
        }
        actualizarListaEffect();
    },[]);

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
        if(JSON.stringify(listaProveedor)!== '[]'){
            return listaProveedor.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => siguientePag("ProveedoresVer", { "id": data._id} )}>
                        <Text style={mainStyles.titleLista}>{data.name_prov} - {data.rfc_prov}</Text>
                    </TouchableOpacity>
                );
            });
        }
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>No hay datos registrados</Text>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 40 }]}>
                    <Text style={mainStyles.titleText}> Proveedores </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("ProveedoresAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default ProveedoresListar;