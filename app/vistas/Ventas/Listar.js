import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView, RefreshControl } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const VentasListar = ({navigation}) => {

    const [listaUsuario,setListaUsuario] = useState([]);
    const [refrescar, setRefrescar] = useState(false);

    useEffect(() => {
        actualizarListaEffect();
    },[]);

    const actualizarListaEffect = async () => {
        setListaUsuario(await peticion.loadTask("usuario"));
    }

    const enRefresco = React.useCallback( async () => {
        setRefrescar(true);
        await actualizarListaEffect();
        setRefrescar(false);
    });

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
        if(listaUsuario){
            if(JSON.stringify(listaUsuario)!== '[]'){
                return listaUsuario.map((data) => {
                    return (
                        <TouchableOpacity key={data._id} onPress={() => siguientePag("UsuariosVer", { "id": data._id} )}>
                            <Text style={mainStyles.titleLista}>{data.nombre} - {data.email}</Text>
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
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>Sin Conexion</Text>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}
                refreshControl={
                    <RefreshControl refreshing={refrescar} onRefresh={enRefresco}/>
                }>
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
                            <Text style={mainStyles.btntxt}>Nuevo</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}

export default UsuariosListar;