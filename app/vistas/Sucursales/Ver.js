import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const SucursalesVer = ({navigation,route}) => {
    
    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    useEffect(() => {
        const actualizaEffect = async () => {
            const obj = await peticion.buscar("sucursal",id);
            setObj(obj);
        }
        actualizaEffect();
    },[]);

    const { id } = route.params;
    const [obj, setObj] = useState({});

    const Datos = () => {
        if(obj && JSON.stringify(obj)!== '{}'){
            return (
                    <TouchableOpacity>
                        <Text style={mainStyles.titleLista}>Nombre: {obj["nombre"]}</Text>
                        <Text style={mainStyles.titleLista}>RFC: {obj.rfc}</Text>
                        <Text style={mainStyles.titleLista}>Telefono: {obj.telefono}</Text>
                        <Text style={mainStyles.titleLista}>Dirección: {obj.direccion}</Text>
                        <Text style={mainStyles.titleLista}>Email: {obj.email}</Text>
                    </TouchableOpacity>
                );
        }
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>No se cargo la información</Text>
                    <Text style={mainStyles.titleLista}>Intentelo más tarde</Text>
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

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}>{ id }</Text>
                    <View>
                        {Datos()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => navigation.goBack() }>
                            <Text style={mainStyles.btntxt}>Volver</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("SucursalesModificar", {"obj": JSON.stringify(obj)})}>
                            <Text style={mainStyles.btntxt}>Modificar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default SucursalesVer;