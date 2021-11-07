import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView,RefreshControl } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const ProductosListar = ({navigation}) => {

    const [listaProducto,setListaProducto] = useState([]);
    const [refrescar, setRefrescar] = useState(false);

    useEffect(() => {
        actualizarListaEffect();
    },[]);

    const actualizarListaEffect = async () => {
        setListaProducto(await peticion.loadTask("producto"));
    }

    const enRefresco = React.useCallback( async () => {
        setRefrescar(true);
        await actualizarListaEffect();
        setRefrescar(false);
    });

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Listar = () => {
        if(listaProducto){
            if(JSON.stringify(listaProducto)!== '[]'){
                return listaProducto.map((data) => {
                    return (
                        <TouchableOpacity key={data._id} onPress={() => siguientePag("ProductosVer", { "id": data._id} )}>
                            <Text style={mainStyles.titleLista}>{data.name_prod}</Text>
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
                    <Text style={mainStyles.titleText}> Productos </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("ProductosAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default ProductosListar;